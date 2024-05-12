var num=344;
var sum=0;
while(num>0){
var rem=num%10;
 sum=sum+rem;
num=parseInt(num/10);
}
console.log(sum);