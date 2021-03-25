import {dataFromToken} from "../Helpers/Token.js";

import UserController from "../Controller/AuthController.js";



export const verifyAuth = (req, res, next )=>{

    const token = req.header("x-auth-token");
    

    if(!token){

        res.status(404).json({

            status : 404,
            message : "No token provided"
        });
    }


    try{

        const user = dataFromToken(token).payload;

        const users = UserController.Users;
    
        const data  = users.find(u => u.email === user.email);
    
        if(!data){
    
            res.status(404).json({
    
                status : 404,
                message : "You are not a user"
            })
        }
    
        req.body.UserId = data.id;
    
        return next();

    }catch(e){

            res.status(404).json({
        
                status : 404,
                message : "invalid token"
            })
    }

   





}