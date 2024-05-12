var num=1;
while(num<=100){
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