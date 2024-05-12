var str="NAMAN";
var str1="";
var i=str.length-1;
while(i>=0){
    str1=str1+str.charAt(i);
    i--;
}
if(str===str1)
    console.log("String Palindrome");
else
    console.log("String Not Palindrome");