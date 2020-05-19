/* To use yargs make these steps
    1. Make sure you are into the project folder
    2. Open terminal         
    3. type --> npm i yargs@12.0.2       // This is allow us to use argv --> argument vector
*/

const yargs = require('yargs')  // Import yargs lib
const Notes = require('./Notes.js') // Connect with another file

// Customize version of yargs
yargs.version('1.1.0')  // Too see version type in terminal --> node main.js --version

// Challenge to create add, remove, read, list note commands

// Create Add note command by yargs.command      // type in terminal --> node main.js --help
yargs.command({
    // All keys are built in keys of yargs.command
    command: 'add', // add --> new command for yargs 
    describe: 'Add a new note',  // describe of 'add command' see it when openning --help
    builder: {   // Allow us to build argv as a node main.js [--help] --> this is a argv
        title: { // type in terminal --> node main.js add --title="New Title"    [--title="New Title"] --> this is a argv
            describe: 'Note Title', // describe of 'title' appear when type in terminal --> node main.js add
            demandOption: true,     // argv is required when demandOption is true
            type: 'string'          // type of argv
        },
        body: {  // type in terminal --> node main.js add --title="New Title" --body="New Body" [--title="New Title" --body="New Body"] --> this is a argv
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {    // handler function allow us to use argv --> argument vector from builder key
        Notes.addNote(argv.title, argv.body)    // Send params to addNote function that into Notes.js
    }

})

// Create Remove note command  // type in terminal --> node main.js --help
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.removeNote(argv.title)    // Send params to removeNote function that into Notes.js
    }
})

// Create Read note command  // type in terminal --> node main.js --help
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.readNote(argv.title)
    }
})

// Create List note command  // type in terminal --> node main.js --help
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        Notes.listNotes()
    }
})

yargs.parse()   // Loop through all of yargs.command call up above
