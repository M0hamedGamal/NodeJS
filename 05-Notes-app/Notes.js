const fs = require('fs') // Import file system lib
const chalk = require('chalk')  //Import chalk lib for color of printing [type in terminal --> npm i chalk@2.4.1]

// Add new Note takes two params from main.js line 33
const addNote = (title, body) => {
    const notes = loadNotes()   // call loadNotes function to read json file & convert data to object

    const duplicateNoteTitle = notes.find((note) => note.title === title) // find to get all notes have the same title
        

    // if length = 0 that's mean there're no notes have the same title
    if (duplicateNoteTitle.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNote(notes) // call saveNote function to write the new note into file
        console.log(chalk.green('New note has been added'))

    } else { // That's mean there're notes have the same title
        console.log(chalk.red('This title has been taken!'))
    }
}

// Remove Note takes one param from main.js line 50
const removeNote = (title) => {
    const notes = loadNotes()   // call loadNotes function to read json file & convert data to object

    const NoteToKeep = notes.filter((note) => note.title !== title)    // return all notes that haven't this title
   

    if (NoteToKeep.length < notes.length) { // check if Original array has length that larger than NoteToKeep array
        console.log(chalk.green('Note is deleted!'))    // print in green color
        saveNote(NoteToKeep)    // Store the new array
    } else {
        console.log(chalk.red('There is no note has this title'))    // print in red color
    }
}

// List Note takes no param & called from main.js line 75
const listNotes = () => {
    const notes = loadNotes()   // Get all notes 

    notes.forEach((note) => console.log(chalk.green.inverse(note.title)))   // print title of all notes ... inverse makes highlight 
}

// Get Note takes one param & called from main.js line 66
const readNote = (title) => {
    const notes = loadNotes()   // Get all notes 

    const foundNote = notes.find((note) => note.title === title) // find to get all notes have the same title    
    
    if(foundNote){  // if there is note has the same title
        console.log(foundNote)  // print the full note
    }else{
        console.log(chalk.red('There is no note has this title'))   // Otherwise print msg
    }
}

// Function to write the new note into file
const saveNote = (notes) => {
    const JsonData = JSON.stringify(notes)    // Convert Object to Json

    fs.writeFileSync('Notes.json', JsonData)    // Write Json Data into a file
}

// Function to read the notes from file
const loadNotes = () => {
    try {
        const JsonData = fs.readFileSync('Notes.json').toString()   // Read Json Data From a file
        return JSON.parse(JsonData)    // Convert Json to Object & return it
        
    } catch (e) {
        return []    // For first time.. create an empty array for every user to store his notes
    }
}


module.exports = {      // Object of functions to share all of them with other files
    addNote: addNote,   // Key: function [as a value]
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
