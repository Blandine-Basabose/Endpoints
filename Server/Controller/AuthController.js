import UserData from "../Model/UserModel.js";

import {generateAuthToken} from "../Helpers/Token.js";


const Users = [];

class UserController {
  static signup = (req, res) => {
    const id = Users.length + 1;
    let {
      firstname,
      lastname,
      email,
      password,
      gender,
      role,
      department,
      address
    } = req.body;
    const IsEmailExist = Users.find((user) => user.email === req.body.email);

    if (IsEmailExist) {
      return res
        .status(409)
        .send({ status: 409, error: "email is duplicated" 
      });
    
    }
   
    const user = new UserData(
      id,
      firstname,
      lastname,
      email,
      password,
      gender,
      role,
      department,
      address
    );
    Users.push(user);

    const data = Users.find((user) => user.email === email);

    if (!data) {
      return res.status(417).json({
        status: 417,
        message: "Signup failed",
        data
      });
    }
    return res.status(201).json({
        status: 201,
        message: "Account created successfully",
        data
    });
  };
  static signin = (req, res) => {
    
    let {
    
      email,
      password,
      
    } = req.body;
    
    const data = Users.find((user) => user.email === email);

    const IsUserExist = Users.find(user => user.email === email);

    if(IsUserExist && IsUserExist.password === password){

     const token = generateAuthToken({id:data.id, email:data,email, role:data.role});
    
      return res.status(201).json({
        status: 201,
        message:" You have successfully signed in",
        token : token,
        data
        
       
      });
    };
    

  };

  
}
export default {UserController, Users};
