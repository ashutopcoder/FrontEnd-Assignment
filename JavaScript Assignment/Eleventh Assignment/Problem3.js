function sentenceReverse(str){
    var str1=str.split(" ");
    var temp="";
    for(let i=0;i<str1.length;i++){
        for(let j=str1[i].length-1;j>=0;j--){
        temp=temp+str1[i].charAt(j);
        }
        temp=temp+" ";
    }
    console.log(temp);
}
var str="MOHAN IS A GOOD BOY";
sentenceReverse(str);