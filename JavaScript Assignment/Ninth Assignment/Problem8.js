var num = [23,456,67,89,56,43,23];
for(let m=0;m<num.length;m++){
    let count = 0;
    for(let i=2;i<num[m]/2;i++){
        if(num[m]%i==0)
            count++;
    }
    if(count==0){
        console.log(num[m])
    }
}