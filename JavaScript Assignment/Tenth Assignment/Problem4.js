var str="mohan is a good boy";
var arr=str.split(" ");
var temp="";
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(j==0){
            if(arr[i].codePointAt(j)>91)
                temp=temp+String.fromCharCode(arr[i].codePointAt(j)-32);
            else
                temp=temp+arr[i].charAt(j);
        }else{
            
            if(arr[i].codePointAt(j)<97)
                temp=temp+String.fromCharCode(arr[i].codePointAt(j)+32);
            else
                temp=temp+arr[i].charAt(j);
        }
    }
    temp=temp+" ";
}
console.log(temp);
