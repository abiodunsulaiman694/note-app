// const fs = require("fs");

// fs.appendFileSync("notes.txt", "Writing to note with node. ");
// fs.appendFileSync("notes.txt", "I believe");
// const validator = require("validator");
// const chalk = require("chalk");
// const log = console.log;

// const getNotes = require("./notes");
// console.log(getNotes("Abiodun"));
// console.log(validator.isEmail("hello"));

// log(chalk.blue.italic.inverse("Success!"));

const yargs = require("yargs");
const notes = require("./notes");

//Customize yargs version
// yargs.version("1.1.0")

//add, remove, read, list notes

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note!",
  title: {
    describe: "Title of note to remove",
    demandOption: true,
    type: "string"
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

//Create list command
yargs.command({
  command: "list",
  describe: "List notes!",
  handler: function(argv) {
    console.log("Listing a new note", argv);
  }
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note!",
  handler: function() {
    console.log("Reading a new note");
  }
});

yargs.parse();

//console.log(process.argv);
//console.log(yargs.argv);
