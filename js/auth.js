const togglePassword=document.getElementById("togglePassword");

if(togglePassword){
    togglePassword.addEventListener("click",()=>{
        const password=document.getElementById("loginPassword");
        if(password.type==="password"){
            password.type="text";
            togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
        }else{
            password.type="password";
            togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';
        }
    });
}

const toggleRegisterPassword=document.getElementById("toggleRegisterPassword");

if(toggleRegisterPassword){
    toggleRegisterPassword.addEventListener("click",()=>{
        const password=document.getElementById("registerPassword");
        if(password.type==="password"){
            password.type="text";
            toggleRegisterPassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
        }else{
            password.type="password";
            toggleRegisterPassword.innerHTML='<i class="fa-solid fa-eye"></i>';
        }
    });
}

const registerForm=document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit",function(e){
        e.preventDefault();

        const name=document.getElementById("registerName").value.trim();
        const email=document.getElementById("registerEmail").value.trim();
        const password=document.getElementById("registerPassword").value;
        const confirm=document.getElementById("confirmPassword").value;

        if(name===""){
            alert("Enter Name");
            return;
        }

        if(!email.includes("@")||!email.includes(".")){
            alert("Invalid Email");
            return;
        }

        if(password.length<6){
            alert("Password should be at least 6 characters");
            return;
        }

        if(password!==confirm){
            alert("Passwords do not match");
            return;
        }

        const user={
            name:name,
            email:email,
            password:password
        };

        localStorage.setItem("user",JSON.stringify(user));
        alert("Registration Successful");
        window.location.href="login.html";
    });
}

const loginForm=document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit",function(e){
        e.preventDefault();

        const email=document.getElementById("loginEmail").value.trim();
        const password=document.getElementById("loginPassword").value;
        const storedUser=JSON.parse(localStorage.getItem("user"));

        if(storedUser==null){
            alert("Please Register First");
            window.location.href="register.html";
            return;
        }

        if(email===storedUser.email&&password===storedUser.password){
            alert("Login Successful");
            localStorage.setItem("isLoggedIn","true");
            window.location.href="index.html";
        }else{
            alert("Invalid Email or Password");
        }
    });
}

// Optional: portfolio is open to public visitors by default

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click",function(){
        localStorage.removeItem("isLoggedIn");
        alert("Logged Out Successfully");
        window.location.href="login.html";
    });
}

const userData=JSON.parse(localStorage.getItem("user"));
const heroName=document.getElementById("userName");

if(heroName&&userData){
    heroName.innerHTML=userData.name;
}

window.history.forward();

function noBack(){
    window.history.forward();
}

document.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        console.log("Enter Pressed");
    }
});

const registerPassword=document.getElementById("registerPassword");

if(registerPassword){
    registerPassword.addEventListener("keyup",function(){
        if(this.value.length>=6){
            this.style.border="2px solid lime";
        }else{
            this.style.border="2px solid red";
        }
    });
}