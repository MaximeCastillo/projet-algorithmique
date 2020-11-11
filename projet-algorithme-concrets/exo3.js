// const exo3 = (arr, s, result = [], hashtable = {}) => {
//   arr.forEach((curr, i) => hashtable[s - curr] ? result.push([curr, s - curr]) : hashtable[curr] = curr)
//   //return result;
//   console.log('result :>> ', result);
// }

const exo3 = (list, k) => {
  save = [];
  res = []
  for (let i = 0; i < list.length; i++) {
    save[i] = k - list[i];
  }
  for (let i = 1; i < save.length; i++) {
    if (list.some((e) => e == save[i])) {
      res.push([list[i], k - list[i]])
    }
  }
  console.log(`Résultat exercice 3 (sujet 1 O(n)):`, res);
}

module.exports = exo3;