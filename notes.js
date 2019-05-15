const fs = require("fs");
const chalk = require("chalk");

const getNotes = noteName => {
  return `Your notes...from ${noteName}`;
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter(note => note.title === title);
  if (duplicateNote.length === 0) {
    notes.push({
      title,
      body
    });
    saveNote(notes);
    console.log(chalk.green("Note added successfully."));
  } else {
    console.log(chalk.red("Note title taken. Please, choose another"));
  }
};
const listNotes = () => {
  console.log(chalk.blue("YOUR NOTES:"));
  const notes = loadNotes();
  notes.map(note => {
    console.log(chalk.green(note.title));
  });
};

const removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);
  if (notes.length === newNotes.length) {
    console.log(chalk.red(`Note with title, '${title}' not found`));
  } else {
    saveNote(newNotes);
    console.log(chalk.green("Note deleted successfully."));
  }
};

const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes };
