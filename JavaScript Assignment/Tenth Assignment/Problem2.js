var str="aeiostvu";
var vouwel=0;
var consonent=0;
for(var i=0;i<str.length;i++){
    if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
         vouwel++;
    }
    else
        consonent++;
}
console.log("Vouwel : "+vouwel);
console.log("Consonent : "+consonent);