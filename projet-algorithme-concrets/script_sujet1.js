console.log("--- Sujet 1 ---");
const fs = require('fs');
const fileName = process.argv[2];
const k = process.argv[3];
const exo1 = require ('./exo1');
const exo3 = require ('./exo3');

try {
    const data = fs.readFileSync(fileName, 'utf8');
    const array = Array.from(data.split(/\s+/));
    const list = array.map(v => parseInt(v, 10));
    exo1(list, k);
    exo3(list, k);
} catch (error) {
    console.error(error.message);
}