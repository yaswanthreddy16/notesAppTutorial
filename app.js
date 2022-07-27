// const chalk = require('chalk')
// const { string } = require('yargs')
// const yargs = require('yargs')
// const notes = require('./notes.js')
const path = require('path')
const express = require('express')

// Create add command
/*yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(argv) {
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Read a note from title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse() */


const app = express();


app.set("view engine", 'hbs');
 app.get('', (req, res) => {
    res.send('Hello express!')
 })
// app.get('/weather', (req, res) => {
//     res.send('Your weather')
// })

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})