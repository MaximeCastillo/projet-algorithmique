const selectionSort = (data) => {

  let comparaison = 0;

  for (let i = 0; i < data.length; i++) {
      //stocker l'index de l'élément minimum
      let min = i;
      for (let j = i + 1; j < data.length; j++) {
          comparaison++;
          if (data[j] < data[min]) {
              // mettre à jour l'index de l'élément minimum
              min = j;
          }
      }
      let tmp = data[i];
      data[i] = data[min];
      data[min] = tmp;
  }

  console.log(`Tri par sélection : ${comparaison} comparaisons -`, data);
};

module.exports = selectionSort;