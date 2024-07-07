import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";
import {upload} from "../middleware/multer.middelware.js";
const router = Router();

//this router points to user.controller.js file 
router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)

export default router;