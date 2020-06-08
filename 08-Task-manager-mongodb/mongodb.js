/* To use NPM package make these steps
    1. Make sure you are into the project folder
    2. Open terminal
    3. Type --> npm init -y               // -y --> yes uses the default
    4. Type --> npm i mongodb@3.1.10    // mongodb@version  install mongodb lib for connecting with database          
*/

const mongodb = require('mongodb')  // import mongodb lib

const MongoClient = mongodb.MongoClient // connect to database

const ObjectID = mongodb.ObjectID       // Create random ID for us or help us to find item by id

const connectionURL = 'mongodb://127.0.0.1:27017'       // URL of database      127.0.0.1 --> localhost   27017 --> default route 
const databaseName = 'task-manager' // Name of database

//  useNewUrlParser --> allow us to use own url connection 
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Cannot connect with database!')     // return and stop here if there's error
    }

    // client.db --> take name of database as arg 
    const db = client.db(databaseName)  // Create new database with own name of database

    // //  db.collection --> take name of collection (table) as arg
    // db.collection('users').insertOne( // CRUD --> [Create] Read Update Delete 
    // {
    //     name: 'Gemy',
    //     age: 24
    // }, (error, result) => {   // Callback func to handle the error & result
    //     if (error){
    //         return console.log('Cannot insert user into users collection!')
    //     }

    //     console.log(result.ops)     // result.ops --> print single document (user)

    // })  // insertOne --> takes single collection for single user


    // //  db.collection --> take name of collection (table) as arg
    // db.collection('tasks').insertMany(  // CRUD --> [Create] Read Update Delete
    // [{  
    //     description: 'finish your task!',
    //     compeleted: true
    // }, {  
    //     description: 'take a rest!',
    //     compeleted: false
    // },{  
    //     description: 'watch a movie!',
    //     compeleted: false
    // }], (error, result) => {   // Callback func to handle the error & result
    //     if (error){
    //         return console.log('Cannot insert user into users collection!')
    //     }

    //     console.log(result.ops)     // result.ops --> print documents (tasks)

    // })  // insertMany --> takes array of collections for multiple tasks

    // //  new ObjectID --> take hexId and convert it to able to search on user
    // db.collection('users').findOne( // CRUD --> Create [Read] Update Delete
    //     {_id: new ObjectID('5ece8a7cf9ec8936c06579da')},    // find or read user where id = '5ece8a7cf9ec8936c06579da'    
    //     (error, user) => {   // Callback func to handle the error & result
    //     console.log(user)
    // })  // findOne --> search for single collection to return single user  

    // db.collection('tasks').find( // CRUD --> Create [Read] Update Delete
    //     {compeleted: false})    // find or read tasks where compeleted = false    
    //     .toArray((error, task) => { // Cursor to get all data into array
    //         console.log(task)
    // })  // find --> search for multiple of collections to return array of tasks  

    // db.collection('users').updateOne( // CRUD --> Create Read [Update] Delete
    //     {_id: new ObjectID('5ece8a7cf9ec8936c06579da')},    // find or read user where id = '5ece8a7cf9ec8936c06579da'    
    //     {
    //         $set:{  // Update operator
    //             name: 'Mohamed'     // Update name from Gemy to Mohamed
    //         }
    //     })    // updateOne --> search for single of collection to update its data  
    //     .then((result) => {       // Promise callback for success
    //         console.log(result)
    //     }).catch((error) => {       // Promise callback for failed       
    //         console.log(error)
    //     })

    // db.collection('tasks').updateMany( // CRUD --> Create Read [Update] Delete
    //     {compeleted: false},    // find or read task where compeleted = false
    //     {
    //         $set:{  // Update operator
    //             compeleted: true     // Update compeleted from false to true
    //         }
    //     })    // updateMany --> search for multiple of collections to update its data  
    //     .then((result) => {       // Promise callback for success
    //         console.log(result)
    //     }).catch((error) => {       // Promise callback for failed       
    //         console.log(error)
    //     })

    // db.collection('users').deleteOne( // CRUD --> Create Read Update [Delete]
    //     { _id: new ObjectID("5ece8a7cf9ec8936c06579da") }    // delete user where id = '5ece8a7cf9ec8936c06579da'    
    // )    // deleteOne --> delete single collection
    //     .then((result) => {       // Promise callback for success
    //         console.log(result)
    //     }).catch((error) => {       // Promise callback for failed       
    //         console.log(error)
    //     })

    db.collection('tasks').deleteMany( // CRUD --> Create Read Update [Delete]
        { compeleted: true },    // delete all tasks where compeleted = true
    )    // deleteMany --> delete multiple of collections  
        .then((result) => {       // Promise callback for success
            console.log(result)
        }).catch((error) => {       // Promise callback for failed       
            console.log(error)
        })

})   // MongoClient.connect takes 3 args [connection url, option object, callback function]


