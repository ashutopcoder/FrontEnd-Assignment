var num=121;
var num1=0;
while(num>0){
    var rem=num%10;
    num1=num1*10+rem;
    num=num/10;
}
if(num==num1){
    console.log("Number Is Palindrome");
}  
else{
    console.log("Number Is Not Palindrome.");
}
