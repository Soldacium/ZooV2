//this is node js server app, but made easier with express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//mongoose for connecting to database
const mongoose = require('mongoose');
const keys = require('./keys');

//import routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const app = express();


// connect to mongo via provided credentials in "keys.js"
mongoose.connect(`mongodb+srv://${keys.mongoUser.login}:${keys.mongoUser.password}@cluster0.8lpmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true , useUnifiedTopology: true}) //if not working remowe retrywrites
    .then(() => {
        console.log('connected')
    })
    .catch(() =>{
        console.log('nope')
    })
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));



app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      'Access-Control-Allow-Credentials', 'true'
    )
    next();
})

// for images
app.use("/images", express.static(path.join('backend/images')));
app.use('/api/auth',authRoutes);
app.use('/api/posts',postsRoutes);


//export to server
module.exports = app;