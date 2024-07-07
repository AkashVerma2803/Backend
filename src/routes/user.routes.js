import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js"

const router = Router();

//this router points to user.controller.js file 
router.route("/register").post(registerUser)

export default router;