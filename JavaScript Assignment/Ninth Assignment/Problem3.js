var arr1=[1,2,4,5,7];
var arr2=[1,2,3,4,5];
var arr3=[];
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            arr3[i]=arr1[i];
        }
    }
}
console.log(arr3);