var num1=10;
var num2=20;
var i=1;
var fact=1;
while(i<=num1){
    if((num1%i==0)&&(num2%i==0))
        fact=i;
    i++;
}
console.log(fact);