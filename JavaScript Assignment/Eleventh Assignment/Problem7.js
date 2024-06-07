function mergeArray(arr1,arr2){
var arr3=[];
var k=0;
    for(let i=0;i<arr1.length;i++){
        arr3[k]=arr1[i];
        k++;
    }
    for(let j=0;j<arr2.length;j++){
        arr3[k]=arr2[j];
        k++;
    }
    return arr3;
}

var arr1=[1,2,3,4];
var arr2=[11,22,33,44];
var ans=mergeArray(arr1,arr2);
console.log("Array 1st : "+arr1);
console.log("Array 2st : "+arr2);
console.log("Array After Merging : "+ans);