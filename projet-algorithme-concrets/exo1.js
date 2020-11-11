const exo1 = (list, k) => {
  compteur = 0;
  let res = false;
  for (let i = 0; i < list.length; i++) {
    const e1 = list[i];
    for (let j = i+1; j < list.length; j++) {
      const e2 = list[j];
      compteur ++;
      if ((e1 + e2) == k) {
        res = true;
      }
    }
  }
  console.log(`Résultat exercice 1 (sujet 1 O(n²)):`, res);
  console.log(`Comparaisons exercice 1 (sujet 1 O(n²)):`, compteur);
}

module.exports = exo1;