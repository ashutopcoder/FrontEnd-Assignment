var str1="MADAM";
var str2="";
for(var i=str1.length-1;i>=0;i--){
    str2=str2+str1.charAt(i);
}
if(str1==str2){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}