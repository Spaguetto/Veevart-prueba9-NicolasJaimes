function runElevator(floorArray, initialFloor, enteredFloors) {
  let currentFloor = initialFloor;
  let direction = "Subiendo";
  let maxFloor = Math.max(...floorArray);
  let minFloor = Math.min(...floorArray);

  while (true) {
    console.log(`Elevador en piso ${currentFloor}`);

    if (floorArray.includes(currentFloor)) {
      console.log(`Elevador se detiene → [${floorArray.join(", ")}]`);
      floorArray = floorArray.filter((floor) => floor !== currentFloor);
    }

    if (enteredFloors[currentFloor]) {
      console.log(
        `Piso ingresado ${enteredFloors[currentFloor]} → [${floorArray.join(
          ", "
        )}]`
      );
      floorArray.push(enteredFloors[currentFloor]);
      maxFloor = Math.max(maxFloor, enteredFloors[currentFloor]);
      minFloor = Math.min(minFloor, enteredFloors[currentFloor]);
      delete enteredFloors[currentFloor];
    }

    if (direction === "Subiendo") {
      if (currentFloor < maxFloor) {
        currentFloor++;
      } else {
        direction = "Bajando";
        currentFloor--;
      }
    } else {
      if (currentFloor > minFloor) {
        currentFloor--;
      } else {
        direction = "Subiendo";
        currentFloor++;
      }
    }

    if (floorArray.length === 0 && Object.keys(enteredFloors).length === 0) {
      break;
    }
  }
}

let floorArray = [5, 29, 13, 10];
let initialFloor = 4;
let enteredFloors = { 5: 2, 29: 10, 13: 1, 10: 1 };

runElevator(floorArray, initialFloor, enteredFloors);


