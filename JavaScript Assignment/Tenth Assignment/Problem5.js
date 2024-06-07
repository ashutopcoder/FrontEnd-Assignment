
var str="hello";
var temp="";
for(var i=0;i<str.length;i++){
    let flag=0;
    for(var j=i+1;j<str.length-1;j++){
        if(str.charAt(i)==str.charAt(j)){
            flag++;
            break;
        }
    }
    if(flag==0){
        temp=temp+str.charAt(i);
    }
}
console.log(temp);