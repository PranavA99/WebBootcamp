const fs = require('fs');
const {Command} = require('commander');

const program = new Command();

program
.name('counter')
.description('CLI for this app')
.version("1.0.0");

program
.description("Count the number of words")
.argument('<file>', 'file to count')
.action((file) => {
    fs.readFile(file, "utf8", (err,data) => {
        if (err){
            console.log(err)
        } else{
            const words = data.split(' ').length;
            console.log("There are " + words + " words in the " + file)
        }
    })
})
program.parse();