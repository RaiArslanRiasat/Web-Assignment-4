const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const CreatePostRoute = require('./routes/createpost')

const AllpostsRoute = require('./routes/Allposts')

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

//connect to DB
mongoose.connect('mongodb+srv://raheemm:raheem12@cluster0.duwqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
(e) => console.log(e))

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//cookie parser middleware
app.use(cookieParser());

//Middlewares
app.use(express.json());

//Import Routes
const authRoute = require('./routes/auth')

//Route middlewares
app.use('/api/user', authRoute)

//Posts middlewares

//to create a post
app.use('/api/createpost', CreatePostRoute)

//to get all the posts
app.use('/api/posts', AllpostsRoute)




app.listen(5000, ()=> console.log('Server is running'))