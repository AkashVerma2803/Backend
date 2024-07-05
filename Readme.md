step 1 : create folder
step 2 : npm init
step 3: git setup
step 4 :.gitignore generate using(https://mrkandreev.name/snippets/gitignore-generato
step 5 : package.json
"type":'models"
step 6 : nodemon ( npm i -D nodemon)
"scripts": {"test": "nodemon src/index.js"}, ------------>>>>> "scripts": { "dev": "nodemon src/index.js" },
step 7 : prettier (npm i -D prettier)
Note: When ever using datebase using try & catch and all use async (database server kidar hai ya konsa bhi hai it will take time to retrive the data)

Step 8:------
As early as possible in your application, import and configure dotenv:

//require('dotenv').config()

import dotenv from "dotenv";
dotenv.config({
path: './env'
})

package.json :--->>> "scripts": {
"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
},

Step 9 :----------------------------------------
Step 10:Mostly we use [(app.use)] for middleware
Step 11: npm i cookie-parser cors

Step 12: mongoose-aggregate-paginate-v2
npm install mongoose-aggregate-paginate-v2

step 13:npm install bcrypt ( it help us to hash our password)
userSchema.pre("save" , async function (next) {
if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()

})

userSchema.methods.isPasswordCorrect = async function(password){
return await bcrypt.compare(password, this.password)
}
Step 14: npm install jsonwebtoken
userSchema.methods.generateAccessToken = function(){
return jwt.sign(
{
\_id:this.\_id, //key hai
email: this.email, // ya 3 tho db se aa rha hai
username:this.username,
fullName:this.fullName
},
process.env.ACCESS_TOKEN_SECRET,
{
expiresIn:process.env.ACCESS_TOKEN_EXPIRY
}
)
}
userSchema.methods.generateRefreshToken = function(){
return jwt.sign(
{
\_id:this.\_id, //key hai
},
process.env.REFRESH_TOKEN_SECRET,
{
expiresIn:process.env.REFRESH_TOKEN_EXPIRY
}
)
}
