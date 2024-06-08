/*Write a program to create an object representing a geometric shape (e.g.,
    circle, rectangle) with properties like dimensions and methods for
    calculating area and perimeter. Implement it in a way that accommodates
    different shapes.
    */
var Circle={
     radious : 20,
     areaCircle : function(rad){
        var ans1=3.14*rad*rad;
        return ans1;
     },
     perimeterCircle:function(rad){
        var ans2=2*22/7*rad;
        return ans2;
     }
};
var Rectangle={
    length:10,
    breadth:5,
    areaRectangle : function(length,breadth){
        var ans3=length*breadth;
        return ans3;
    },
    perimeterRectangle : function(length,breadth){
        var ans4=2*(length+breadth);
        return ans4;
    }
};
var radious=12;
var len=10;
var br=3;
var a1=Circle.areaCircle(radious);
var a2=Circle.perimeterCircle(radious);
var a3=Rectangle.areaRectangle(len,br);
var a4=Rectangle.perimeterRectangle(len,br);
console.log("Area Of Circle : "+a1);
console.log("Perimeter Of Circle : "+a2);
console.log("-----------------------------");
console.log("Area Of Rectangle : "+a3);
console.log("Perimeter Of Rectangle : "+a4);