function convertTemprature(cel){
var far=cel*(9/5)+32;
return far;
}
var cel=35;
var far=convertTemprature(cel);
console.log("Temprature In Celcious : "+cel);
console.log("Temprature In Farhenite : "+far);