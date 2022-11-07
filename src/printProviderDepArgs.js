import fs from "fs";

// read the tsconfig
const conf = JSON.parse(fs.readFileSync("tsconfig.json"))

// get the references
const refs = conf.references || []

// in each reference there is a path
refs.forEach(element => {
    if(element.path) {
        process.stdout.write(' -w ')
        process.stdout.write(element.path)
    }
});