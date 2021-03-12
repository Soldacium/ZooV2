const express = require('express');
const router = express.Router()
const Post = require('../models/post')
const multer = require('multer')

const checkAuth = require('../middleware/check-auth')

const MIME_TYPE = {
    'image/png' : 'png',
    'image/jpeg' : 'jpg',
    'image/jpg' : 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype]
        let error = new Error('invalid mime type')
        if (isValid){
            error = null;
        }
        cb(error, 'backend/images');
    },
    filename: (req,file,cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE[file.mimetype];
        cb(null,name + Date.now() + '.' + ext)
    }
});



router.post('',
    checkAuth,multer({storage: storage}).single('image'),(req,res,next) => {
    const url = req.protocol + '://' + req.get('host')
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc,
        imagePath: url + '/images/' + req.file.filename,
    });
    console.log(post);
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'post added successfully',
            post: {
                id: createdPost._id,
                title: createdPost.title,
                desc: createdPost.desc,
                imagePath: createdPost.imagePath
            }
        })        
    })

});


router.put("/:id",
    checkAuth, (req, res, next) => {
    console.log(req,res)
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.desc
      });
      Post.updateOne({ _id: req.params.id }, post).then(result => {
        res.status(200).json({ message: "Update successful!" });
      });
    
});



router.get(':id',(req,res,next) => {

    Post.find().then((documents) => {
        console.log(documents)
        res.status(200).json({
            message: 'hey',
            posts: documents
        });
    });

});


router.delete('/:id',
    checkAuth,(req,res,next) => { 
    Post.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({ message: 'post deleted'});
    }) 
    
})

module.exports = router;