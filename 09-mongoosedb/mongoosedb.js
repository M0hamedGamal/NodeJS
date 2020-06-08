// Type into terminal -->   npm i mongoose@5.3.16
const mongoose = require('mongoose')

// Type into terminal -->   npm i validator@10.9.0
const validator = require('validator')

// mongoose.connect --> Setup connection with database 
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-task-manager', // URL of database / Name of table to create it for us
    {
        useNewUrlParser: true,     // useNewUrlParser --> allow us to use own url connection 
        useCreateIndex: true        // useCreateIndex  --> allow us to know when mongooseDB connect with mongoDB
    }
)

// mongoose.model takes two args    (name of collection, object of validation columns)
const User = mongoose.model('Users',
    {
        name: { //Name of column

            type: String,   // Type of column
            trim: true,     // Remove spaces before & after name  
            required: true, // Name is required for us

        },
        email: {

            type: String,       // Type of column
            trim: true,         // Remove spaces before & after name  
            required: true,     // Name is required for us
            lowercase: true,   // Store email as lowercase into database
            validate(value) {    // Customize own validation on the value
                if (!validator.isEmail(value)) {  // Check validation of this value as email
                    throw new Error('Email is invalid!')
                }
            }
        },
        password: {

            type: String,       // Type of column
            trim: true,         // Remove spaces before & after name  
            required: true,     // Name is required for us
            minlength: 7,       // minimum length is 7
            validate(value) {    // Customize own validation on the value
                if (value.toLowerCase().includes('password')) {   // Check if password of user dosn't contain word of password
                    throw new Error('Password cannot contain word of password!')
                }
            }
        },
        age: { // Name of column

            type: Number,   // Type of column
            default: 0      // If user didn't enter his age.. make the default value is 0
        }
    }
)

// Create collection by sending object of data to constructor of User as a param 
const user = new User(
    {
        name: '     Gemy    ',          // Set name of user
        email: 'Gemy@yahoo.com  ',      // Set email of user
        password: ' Secrect '           // Set password of user
        // let age take the default value
    })

// user.save() --> save it into database & return promise to handle result & error 
user.save().then((me) => {

    console.log(me)

}).catch((error) => {

    console.log('Error!', error)
})

const Task = mongoose.model('Tasks',
    {
        description: {

            type: String,
            trim: true,
            required: true,

        },

        compeleted: {

            type: Boolean,
            default: false
        }
    })

const task = new Task(
    {
        description: 'finish your task!',
        compeleted: true
    }
)

task.save().then((data) => {

    console.log(data)

}).catch((error) => {
    console.log('Error!', error)
})
