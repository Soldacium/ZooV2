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

router.post('',multer({storage: storage}).single('image'),(req,res,next) => { //checkauth
    const url = req.protocol + '://' + req.get('host')
    //console.log(req);
    const post = new Post({
        title: req.body.title,
        summary: req.body.summary,
        tags: req.body.tags,
        date: req.body.date,
        content: req.body.content,
        comments: req.body.comments,
        hasEvent: req.body.hasEvent,
        imageUrl: url + '/images/' + req.file.filename,
    });
    
    post.save().then(createdPost => {
        res.status(201).json({
                _id: createdPost._id,
                title: createdPost.title,
                content: createdPost.content,
                tags: createdPost.tags,
                date: createdPost.date,
                summary: createdPost.summary,
                comments: createdPost.comments,
                hasEvent: createdPost.hasEvent,
                imageUrl: createdPost.imageUrl,
            })        
    });
});


router.put("/:id", checkAuth, (req, res, next) => {
    //console.log(req,res)
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.desc
      });
      Post.updateOne({ _id: req.params.id }, post).then(result => {
        res.status(200).json({ message: "Update successful!" });
      });
    
});



router.get('',(req,res,next) => {
    Post.find().then((posts) => {
        res.status(200).json(posts);
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