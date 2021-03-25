import express from "express";

import bodyParse from "body-parser";

import authRouter from './Server/Route/AuthRoute.js';

import blogRouter from './Server/Route/BlogRoute.js';

import jsonwebtoken from "jsonwebtoken";

import dotenv from 'dotenv';



dotenv.config({path : "./.env"});

const app = express();

app.use(bodyParse.json());
 
app.use('/api/v1/blogpost',authRouter);

app.use('/api/v1/blog',blogRouter);

app.use('/', (req, res) => {
    
    res.status(200).send({
        status: 200,
        message: "This is a Blogpost API"
    })
})

const port =  process.env.PORT;

app.listen(port, () =>{

    console.log(`Server is running on port ${port}`);
})

export default app;

