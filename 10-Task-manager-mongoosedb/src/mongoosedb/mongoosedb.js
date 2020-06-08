// Type into terminal -->   npm i mongoose@5.3.16
const mongoose = require('mongoose')

// mongoose.connect --> Setup connection with database 
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-task-manager', // URL of database / Name of table to create it for us
    {
        useNewUrlParser: true,     // useNewUrlParser --> allow us to use own url connection 
        useCreateIndex: true        // useCreateIndex  --> allow us to know when mongooseDB connect with mongoDB
    }
)
