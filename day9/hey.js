function add(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var c=a+b;
    document.getElementById("result").innerHTML="the result is:"+" "+c;
}
function sub(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var c=a-b;
    document.getElementById("result").innerHTML="the result is:"+" "+c;
}
function mul(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var c=a*b;
    document.getElementById("result").innerHTML="the result is:"+" "+c;
}
function div(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var c=a/b;
    document.getElementById("result").innerHTML="the result is:"+" "+c;
}
function mod(){
    var a= parseFloat(document.getElementById("num1").value);
    var b= parseFloat(document.getElementById("num2").value);
    var c=a%b;
    document.getElementById("result").innerHTML="the result is:"+" "+c;
}