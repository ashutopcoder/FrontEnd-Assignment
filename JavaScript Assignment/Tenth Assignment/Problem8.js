var str="hello";
var tmp = "";
for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122)
        tmp=tmp+String.fromCharCode(str.charCodeAt(i)-32);
    else
        tmp+=str.charAt(i);
}
console.log(tmp);