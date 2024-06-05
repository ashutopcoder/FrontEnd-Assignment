var arr=[2,3,4,1,6,7,8,10,9];
var largest=[0];
var smallest=[0];
for(var i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }else if(arr[i]<smallest){
        smallest=arr[i];
    }
}

console.log("largest value : "+largest);
console.log("smallest value : "+smallest);
