//import fs from 'fs';
//import chalk from 'chalk';
const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        //console.log(note.title + ' : ' + title)
        return note.title === title
    })
    //console.log(duplicateNotes);
    if (duplicateNotes.length === 0) {        
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();
    const notesDisplay = "Your Notes";
    let noteslist = "";
    notes.forEach((note) => {
        noteslist += "\n" + note.body;
    });
    console.log(chalk.red.inverse(notesDisplay) + noteslist);
}

/*const findIndexVal = function(array, key, value) {
    const index = array.findIndex(obj => obj[key] === value);
    return index >= 0 ? [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ] : array;
}*/

const removeNote = (title) => {
    const notes = loadNotes();
    const noteExists = notes.filter((note) => {
        return note.title !== title
    })
    if(noteExists.length === notes.length) {
        console.log(chalk.bgRed("No Note Found!"))
       // console.log("No Note Found!")
    } else {
        console.log(chalk.bgGreen("Note Removed!"))
        //console.log("Note Removed!")
    }
    saveNotes(noteExists);
    /*if(noteExists.length > 0) {
        //const filteredArr = findIndexVal(notes, 'title', title);
        saveNotes(noteExists);
    } else {
        console.log("Record with title " + title + " doesn't exist");
    }*/
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundnote = notes.find((note) => {
        return note.title === title
    })
    if(!foundnote) {
        console.log(chalk.red("No Note Found!"))
    } else {
        console.log("Title is " + chalk.green.inverse(foundnote.title) + " & body is " +foundnote.body)
    }
}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}