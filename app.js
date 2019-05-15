const yargs = require("yargs");
const notes = require("./notes");
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
    notes.listNotes();
  }
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note!",
  title: {
    describe: "The title of the note you want to read",
    demandOption: true,
    type: "string"
  },
  handler: function(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();

//console.log(process.argv);
//console.log(yargs.argv);
