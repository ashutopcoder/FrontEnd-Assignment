function evenArray(arr){
    let arr1=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr1[j]=arr[i];
            j++;
        }
    }
    return arr1;
}
var arr=[765,86,64,53,63];
var ans =evenArray(arr);
console.log(ans);