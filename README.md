# Veevart-prueba9-NicolasJaimes


El archivo BasicElevator.js nos permite afrontar el primer entorno de la prueba, para ello se crean 
los medios necesarios para poder imitar o emular el comportamiento del asensor, currentFloor nos indica la posicion actual del asensor, maxFloor y minFloor nos dejan conocer si el flujo o el movimiento del ascensor sera correctamente empleado en una u otra direccion , el resultado de consola para este primer ejercicio es el siguiente > 

Ejemplo de impresión en consola
Arreglo de pisos: [5, 29, 13, 10]
Piso inicial de ejecución: 4

Pisos ingresados: {5:2, 29: 10, 13: 1, 10:1}
Sentido: Subiendo
1. Elevador en piso 4
2. Elevador subiendo
3. Elevador en piso 5
4. Elevador se detiene → [29, 13, 10]
5. Piso ingresado 2 → [29, 13, 10, 2]
6. Elevador subiendo
7. Elevador en piso 6, ... 7, ... 8, ... 9
8. Elevador en piso 10
9. Elevador se detiene → [29, 13, 2]
10. Piso ingresado 1 → [29, 13, 1]
11. Elevador subiendo
12. Elevador en piso 11, ... 12
13. Elevador en piso 13
14. Elevador se detiene → [29, 2, 1]
15. Elevador subiendo
16. Elevador en piso 14, ... 28
17. Elevador en piso 29
18. Elevador se detiene → [2, 1]
19. Piso ingresado 10 → [2, 1, 10]
20. Elevador descendiendo
21. Elevador en piso 28, ... 11
22. Elevador en piso 10
23. Elevador se detiene → [2, 1]
24. Elevador descendiendo
25. Elevador en piso 9, ... 3
26. Elevador en piso 2
27. Elevador se detiene → [1]
28. Elevador descendiendo
29. Elevador en piso 1
30. Elevador se detiene


A partir de aqui tenemos elementos adicionales que nos permiten emular u emitar la logica del ascensor , estos mismos son entradas en la funcion 
runElevator, estos parametros son > 

* floorArray, initialFloor y enteredFloors

estos nos permiten definir el array de pisos, el piso inicial y los pisos ingresados por el usuario final

Utilizamos 3 estados condicionales para determiar la posicion del asensor, si el asensor esta en movimiento se determina su direccion, de lo encontrario este se encuetnra detenido u en reposo.