const FileSystem = require('fs')    // require for calling library.. fs --> File System


FileSystem.writeFileSync('newText.txt', 'Welcome to the new course of NodeJS') // writeFileSync take (Name of new file, Text will be written)

FileSystem.appendFileSync('newText.txt', '\nMy Name is Gemy & it is append text') // appendFileSync take (The same name of new file, Text will be written append to avoid the over write)


const Object = {    // Object
    name: 'My name is Gemy',
    age: 24
}

const ConvertToJSON = JSON.stringify(Object)     // Convert from Object to Json

FileSystem.writeFileSync('jsonFile.json', ConvertToJSON) // Write Json into file 

const BufferData = FileSystem.readFileSync('jsonFile.json')  // Read data from file & return binary

const  JsonData = BufferData.toString()  // Convert from binary to string

const ConvertToObject = JSON.parse(JsonData)      // Convert from Json to Object

console.log(ConvertToObject.name)    // Get name of Object