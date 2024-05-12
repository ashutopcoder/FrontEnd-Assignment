var num=123;
var num1=0;
while(num>0){
var rem=num%10;
num1=num1*10+rem;
num=parseInt(num/10);
}
console.log(num1);