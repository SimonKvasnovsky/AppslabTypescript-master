let heightOfStep : number = 0.3;
let lenghtOfStep : number = 0.2;
let towerHeight : number = 25;
let numberOfSteps : number = (towerHeight/heightOfStep);
let result : number = numberOfSteps* (heightOfStep+lenghtOfStep);
var distance: string = "Total distance is " + result;
console.log(distance);