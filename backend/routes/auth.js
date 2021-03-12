const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const router = express.Router()
const User = require('../models/user');

const checkAuth = require('../middleware/check-auth');



//for users
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10,)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            username: req.body.username,
        })     
        user
        .save()
        .then(result => {
            res.status(201).json({
                message: 'User signed',
                result: result
            })
        }) 
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    })
})


router.put('/signup/:id', (req,res,next) => {
    const user = req.body;
    User.updateOne({_id: req.params.id}, user).then(result => {
        res.status(200).json({ message: "Update successful!" });
      });
})

router.get('/login/:id',(req,res,next) => {
    //get from database n shit
    User.findOne({_id: req.params.id}).then((user) => {

        if(req.query.mode !== 'onlyCollections'){
            res.status(200).json({
                message: 'user gotten',
                userData: user
            });            
        }else{
            res.status(200).json({
                message: 'user gotten'
            });  
        }
    });
});




//for logging
router.post('/login', (req,res,next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({
                message: "non-exiting user"
            })
        }
        // descrypt password and compare
        fetchedUser = user;
        bcrypt.compare(req.body.password, user.password)
        .then(result => {
            if(!result) {
                return res.status(401).json({
                    message: 'wrong password'
                })
            }
            const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, 
                'placeholder_secret_hash_longer', 
                { expiresIn: '1h',});
            
            res.status(200).json({
                token: token,
                userID: fetchedUser._id,
                userData: user
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: "non-exiting user"
            })
        })
    })
})


module.exports = router;
