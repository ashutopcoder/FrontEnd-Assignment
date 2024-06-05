var arr=[1,2,3,4,1,3,5,6];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]&&arr[j]!=-1){
            arr[j]=-1;
        }
    }
    if(arr[i]!=-1){
        console.log(arr[i]);
    }
}
