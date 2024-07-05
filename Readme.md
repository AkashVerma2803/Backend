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
