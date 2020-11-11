const exo2 = (list) => {
  let compteur = 0;
  let res = 0
  for (let i = 0; i < list.length; i++) {
    const b1 = list[i];
    let canSeeTheSunset = true;
    for (let j = i+1; j < list.length; j++) {
      const b2 = list[j];
      compteur ++;
      if (b1 < b2) {
        canSeeTheSunset = false;
        break;
      }
    }
    if (canSeeTheSunset) {
      res ++;
    }
  }
  console.log(`Résultat exercice 2 (sujet 2 O(n²)):`, res);
  //console.log(`Comparaisons exercice 2 (sujet 2 O(n²)):`, compteur);
}

module.exports = exo2;