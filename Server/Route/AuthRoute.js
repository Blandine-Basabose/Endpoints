import express from "express";

import UserController from "../Controller/AuthController.js";


const router = express.Router();

router.post("/auth/signup",UserController.UserController.signup);

router.post("/auth/signin", UserController.UserController.signin);



export default router;