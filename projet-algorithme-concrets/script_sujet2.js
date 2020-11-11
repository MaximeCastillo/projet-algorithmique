console.log("--- Sujet 2 ---");
const fs = require('fs');
const fileName = process.argv[2];
const exo2 = require('./exo2');
const exo6 = require('./exo6');

try {
    const data = fs.readFileSync(fileName, 'utf8');
    const array = Array.from(data.split(/\s+/));
    const list = array.map(v => parseInt(v, 10));
    exo2(list);
    exo6(list);
} catch (error) {
    console.error(error.message);
}