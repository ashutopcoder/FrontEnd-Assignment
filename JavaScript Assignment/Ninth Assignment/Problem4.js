var arr=[1,2,1,1];
var arr1=[];
var flag=1;
var j=0;
for(var i=arr.length-1;i>=0;i--){
arr1[j]=arr[i];
j++;
}
for(var z=0;z<arr.length;z++){
if(arr1[z]!=arr[z]){
    flag=0;
}
}
if(flag==1)
    console.log("Palindrome");
else
    console.log("Not Palindrome");