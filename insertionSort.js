const insertionSort = (data) => {
  let comparaison = 0;
  let n = data.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = data[i];
    // The last element of our sorted subarray
    let j = i - 1;
    comparaison ++;
    while ((j > -1) && (current < data[j])) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = current;
  }
  console.log(`Tri par insertion : ${comparaison} comparaisons -`, data);
}

module.exports = insertionSort;