class Elevator {
  constructor(floorArray, initialFloor) {
    this.floorArray = floorArray;
    this.currentFloor = initialFloor;
    this.direction = "Subiendo";
    this.maxFloor = Math.max(...floorArray);
    this.minFloor = Math.min(...floorArray);
    this.enteredFloors = {};
  }

  requestElevator(floor) {
    if (floor === this.currentFloor) {
      console.log(`El ascensor ya está en el piso ${floor}`);
      return;
    }

    if (this.direction === "Subiendo" && floor > this.maxFloor) {
      console.log(`El ascensor no puede llegar al piso ${floor}`);
      return;
    }

    if (this.direction === "Bajando" && floor < this.minFloor) {
      console.log(`El ascensor no puede llegar al piso ${floor}`);
      return;
    }

    this.enteredFloors[floor] = (this.enteredFloors[floor] || 0) + 1;
    console.log(`Solicitud de ascensor para el piso ${floor} recibida`);
  }

  runElevator() {
    while (true) {
      console.log(`Elevador en piso ${this.currentFloor}`);

      if (this.floorArray.includes(this.currentFloor)) {
        console.log(`Elevador se detiene → [${this.floorArray.join(", ")}]`);
        this.floorArray = this.floorArray.filter(
          (floor) => floor !== this.currentFloor
        );
      }

      if (this.enteredFloors[this.currentFloor]) {
        console.log(
          `Piso ingresado ${
            this.enteredFloors[this.currentFloor]
          } → [${this.floorArray.join(", ")}]`
        );
        this.floorArray.push(this.enteredFloors[this.currentFloor]);
        this.maxFloor = Math.max(
          this.maxFloor,
          this.enteredFloors[this.currentFloor]
        );
        this.minFloor = Math.min(
          this.minFloor,
          this.enteredFloors[this.currentFloor]
        );
        delete this.enteredFloors[this.currentFloor];
      }

      if (this.direction === "Subiendo") {
        if (this.currentFloor < this.maxFloor) {
          this.currentFloor++;
        } else {
          this.direction = "Bajando";
          this.currentFloor--;
        }
      } else {
        if (this.currentFloor > this.minFloor) {
          this.currentFloor--;
        } else {
          this.direction = "Subiendo";
          this.currentFloor++;
        }
      }

      if (
        this.floorArray.length === 0 &&
        Object.keys(this.enteredFloors).length === 0
      ) {
        break;
      }
    }
  }
}

let floorArray = [5, 29, 13, 10];
let initialFloor = 4;

let elevator = new Elevator(floorArray, initialFloor);

elevator.requestElevator(2);
elevator.requestElevator(10);
elevator.requestElevator(1);
elevator.requestElevator(1);

elevator.runElevator();
