names = ["Nathan", "John", "Alice", "Nancy", "Bob"]
var count=0;
for(let i=0;i<names.length;i++){
    if(names[i].charAt(0)=='N'||names[i].charAt(0)=='n')
        count++;
}
console.log(names);
console.log("Output : "+count);
