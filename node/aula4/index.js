const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    Walk(files);
};

function Walk(files) {
    for(let file of files) {
        console.log(file)
    }
}

readdir()