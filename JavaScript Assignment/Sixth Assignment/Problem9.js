var num=78;
var num1='';
while(num>0){
var rem=num%2;
num1=num1+rem;
num=parseInt(num/2);
}
let bin = '';
let ans= num1.length;
while(ans>=0){
bin = bin+num1.charAt(ans);
ans--;
}
console.log(bin);