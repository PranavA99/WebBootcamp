import fs from 'fs';
import chalk from 'chalk';
import { Command } from 'commander';
import PromptSync from 'prompt-sync';

const program = new Command();
const prompt = new PromptSync({sigint: true});

program
.name("TODO list")
.description("Creates a TODO list")
.version("1.0.0");

program
.argument("<file>", "file to store list")
.action((file) => {
    console.log("1. Add     2. Done     3. Read     4. Exit");
    var count = 1;
    var choice = prompt("\nEnter choice: ");
    
    while (choice != 4){
        if (choice == 1){
            let td = prompt("Enter task: ");
            fs.appendFile(file, `${count}. ${td}\n`, (err)=>{
                if (err) console.log(err);
            })
        }
        
        if (choice == 2){
            let num = Number(prompt("Enter task number: "));
            fs.readFile(file, "utf-8", (err,data) => {
                if (err){
                    console.log(err)
                } else {
                    let items = data.split('\n');
                    items[num] = chalk.strikethrough(items[num]);
                    items = items.join("");
                    fs.writeFile(file, items, (err)=>{
                        if (err) console.log(err);
                    })
                }
            })
        }

        if (choice == 3){
            fs.readFile(file, "utf-8", (err,data) => {
                if (err){
                    console.log(err)
                } else{
                    console.log(data)
                }
            })
        }

        count++;
        choice = prompt("Enter choice: ");
    }

    console.log("See you later ;)");
});

program.parse();