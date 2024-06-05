
var str="hello";
for(var i=0;i<str.length;i++){
    for(var j=i+1;j<str.length-1;j++){
        if(str.charAt(i)==str.charAt(j)&&str.charAt(i)!=-1){
            str.charAt(j)=-1;
        }
    }
}
console.log(str);