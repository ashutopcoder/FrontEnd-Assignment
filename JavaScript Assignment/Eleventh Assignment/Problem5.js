function largest(arr){
var large=arr[0];
var temp;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            temp=large;
            large=arr[i];
            arr[i]=temp;
        }       
    }
    return large;
}
var arr=[234,543,123,654,11,345,555,10,8,4];
var ans=largest(arr);
console.log("Largest Value : "+ans);