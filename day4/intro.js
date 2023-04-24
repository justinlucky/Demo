 const app = document.getElementById("app");
    let signUpPage= false;
    let signInPage= false;

    const handleSignUpPage = () => {
        signUpPage= true;
        signInPage= false;
        render();
    };
    const handleSignInPage = () => {
        signUpPage= false;
        signInPage= true;
        render();
    };

    const render = () => {
        let content = ` `;

        if(signInPage){
            content = `<div id="container-signin">
                <h1>this is login page</h1>
                <form>
                    <input type="text" placeholder="enter your user name">
                    <br> <br>
                    <input type="password" placeholder="enter your password">
                    <br> <br>
                    <button>Login</button>
                    <p>Dont have an account yet? Click the below button to Sign up </p>
                <button onClick="handleSignUpPage()">Sign Up</button>
                </div>
               `;
        }
        else if(signUpPage){
            content = `<div id="container-signin">
                <h1>this is sign up page</h1>
                <form>
                    <input type="text" placeholder="enter your user name">
                    <br> <br>
                    <input type="password" placeholder="enter your password">
                    <br> <br>
                    <button>Sign up</button>
                </div>
               `;
        }
        else{
            content = `<div id="container-signin">
                <h1>Welcome to my website</h1>
                <button onClick="handleSignInPage()"> Login </button>
                </div>
               `;
        }
        app.innerHTML=content;

    };
    render();
 <script src="intro.js"></script>
