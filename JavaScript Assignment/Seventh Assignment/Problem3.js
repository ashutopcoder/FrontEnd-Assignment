var num=1;
var end=35;
while(num<=end){
var i=2;
var count=0;
while(i<=num/2){
if(num%i==0)
count++;
i++;
}

if(count==0){
    console.log(num);
}
num++;
}