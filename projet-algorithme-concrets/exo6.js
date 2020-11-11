const exo6 = (data) => {

  const countSunsetView = (list) => {
    let counter = 1;
    let buildingsList = list;
    if (buildingsList.indexOf(Math.max(...buildingsList)) === (list.length - 1)) {
      return counter;
    }
    while (buildingsList.length > 1) {
      counter ++;
      let indexOfHighestBuilding = buildingsList.indexOf(Math.max(...buildingsList));
      buildingsList = buildingsList.splice(indexOfHighestBuilding + 1);
    }
    return counter;
  }

  console.log(`Résultat exercice 6 (sujet 2):`, countSunsetView(data));
}

module.exports = exo6;