import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadONCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async(req,res) => {
    // res.status(200).json({
    //     message:"ok"
    // })


    //Actual User input validation start from here
    /*
        1. get user details from frontend
        2. validation - not empty
        3. check if user already exists: (using username, email)
        4. check for image, check for avatar
        5. upload them to cloudinary ,( avatar )
        6. create user object - create entry in DB
        7. remove password and refresh token filed from response
        8. check for user Creation
        9. return res    
    */

        const {fullName,email,username,password} = req.body

        // if(fullName === ""){
        //     throw new ApiError(400, "All fileds are required");
        // }

        //Does user return empty fields
        if(
            [fullName,email,username,password].some((field) =>field?.trim() ==="")
        ){
           throw new ApiError(400, "All fileds are required");
        }

        //Username check 
        const existedUser = User.findOne({
            $or:[{username}, {email}]
        })

        if(existedUser){
            throw new ApiError(409 ,"User already exist")
        }

        //check that image file exists or not 
        const avatarLocalPath = req.files?.avatar[0]?.path;
        const coverImageLocalPath = req.files?.coverImage[0]?.path;

        if(!avatarLocalPath) {
            throw new ApiError(400 ,"Avatar file is required")
        }


        //upload image on cloudinary
        const avatar = await uploadONCloudinary(avatarLocalPath)
        const coverImage = await uploadONCloudinary(coverImageLocalPath)

        if(!avatar){
            throw new ApiError(400 ,"Avatar file is required")
        }

        //DB entry
        const user = await User.create({
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase(),
        })

        // remove password and refresh token filed from response
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if(!createdUser){
            throw new ApiError(500, "Something went wrong while registering user")
        }

        return res.status(201).json(
            new ApiResponse(200, createdUser,"User registered SuccessFully")
        )
})

export {registerUser}