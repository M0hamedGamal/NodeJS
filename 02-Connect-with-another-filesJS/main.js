// ./ --> Get the file called notes.js from the same folder
const Note = require('./notes.js') // Note stores 'getNotes function' that created into notes.js

const myNote = 'My Notes...'      // Send it as a param of getNotes that called from note.js file

console.log(Note(myNote))   // print