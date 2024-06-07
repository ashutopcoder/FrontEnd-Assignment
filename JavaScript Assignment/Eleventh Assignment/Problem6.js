function checkCharacter(str,ch){
    var count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==ch){
            count++;
        }        
    }
    return count;
}
var str="MY NAME IS ABHISHEK";
var ch='A';
var ans=checkCharacter(str,ch);
console.log("Character "+ch +" Is Found In String Is "+ans);