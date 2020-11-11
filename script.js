console.log("--- Algorithmes de tri ---");
const fs = require('fs');
const fileName = process.argv[2];
const bubbleSort = require ('./bubbleSort');
const insertionSort = require ('./insertionSort');
const selectionSort = require ('./selectionSort');
//const quickSort = require ('./quickSort');

try {
    const data = fs.readFileSync(fileName, 'utf8');
    const array = Array.from(data.split(/\s+/));
    const list = array.map(v => parseInt(v, 10));
    bubbleSort(list);
    insertionSort(list);
    selectionSort(list);
    //quickSort(list);
} catch (error) {
    console.error(error.message);
}