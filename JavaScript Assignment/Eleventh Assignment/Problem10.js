function simpleCalculator(num1,num2,operator){
    var str=num1+""+operator+""+num2;
    return eval(str);
}
var num1=234;
var num2=12;
var operator='+';
var result=simpleCalculator(num1,num2,operator);
console.log(num1+" "+operator+" "+num2+" = "+result);
var num1=234;
var num2=12;
var operator='-';
var result=simpleCalculator(num1,num2,operator);
console.log(num1+" "+operator+" "+num2+" = "+result);