var gender="male";
age=19;
if(gender=="female"){
    if(age>=18)
        console.log("Eligble For Marrige");
    else
        console.log("Not Eligble For Marrige");
}else if(gender=="male"){
    if(age>=21)
        console.log("Eligble For Marrige");
    else
        console.log("Not Eligble For Marrige");
}else{
    console.log("Gender Not Defined");
}