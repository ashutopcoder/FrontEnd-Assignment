var arr1=[1,2,3,4,5,6,7,8,9,10];
var even=[];
var odd=[];
for(var i=0;i<arr1.length;i++){
    if(arr1[i]%2==0){
        even.push(arr1[i]);
    }
    else
        odd.push(arr1[i]);
}
console.log("Even Elements : "+even);
console.log("Odd Elements : "+odd);
