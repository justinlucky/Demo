function validate(password1) {
    var password1= document.getElementById("password1").value;
    var password2= document.getElementById("password2").value;
    var exp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    exp.test(password1);
    if (password1.length<8){
        alert("password to weak");
        alert("password should be atleast 8 characters");
    }
    else if( password1!==password2){
        alert("password not match");
    }
    else if( password1!==exp){
        alert("password should contain special characters,uppercase,lowercase and number");
    }

}