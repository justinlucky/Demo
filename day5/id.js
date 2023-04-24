function add(){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
    var c= a+b;
    document.getElementById("result").innerHTML= "The sum is" +c;
}

function sub(){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    var c= a-b;
    document.getElementById("result").innerHTML= "The difference is:" +c;
}
function mul(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var c=a*b;
    document.getElementById("result").innerHTML=c;

}
function div(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var c=a/b;
    document.getElementById("result").innerHTML="the output is:"+c;

}