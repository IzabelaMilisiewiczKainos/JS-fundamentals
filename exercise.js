let familySize = 3;
let plannedDistanceToDrive = 100;
 
function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return "Toyota Camry";
  } else {
    return "Minivan";
  }
}
 
console.log(recommendedCar(familySize, plannedDistanceToDrive));