function anagramCheck(str1,str2){
    var count = 0;
if(str1.length==str2.length){
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1.charAt(i)==str2.charAt(j))
            {
                 count++;
                 str2=str2.substring(0,j)+'$'+str2.substring(j+1);
            }
        }
    }
    if(count==str1.length)
        console.log("Anagram");
    else
        console.log("Not Anagram!");
}
    else{
        console.log("Length Not Equal,So It Is Not A Anagram");
    }
}
var str1="LISTEN";
var str2="SILENT";
anagramCheck(str1,str2);