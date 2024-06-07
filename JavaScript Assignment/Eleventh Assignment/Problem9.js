function removeVouwel(str){
    var temp="";
    for(let i=0;i<str.length;i++){
        if(!(str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U')){
            temp=temp+str.charAt(i);   
        }
    }
    return temp;
}

var str="AHYEJKIBCOU";
var ans=removeVouwel(str);
console.log("String : "+str);
console.log("After Removing Vouwel : "+ans);