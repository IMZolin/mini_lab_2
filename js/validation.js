let names = document.querySelectorAll('.name'),
    password = document.getElementById('password'),
    rep_password = document.getElementById('password-repeat'),
    passwords = document.querySelectorAll('.password'),
    email = document.querySelector('.email'),
    errorMsg = document.querySelectorAll(".error"),
    sign_up_btn = document.getElementById("sign_up_btn"),
    sign_in_btn = document.getElementById("sign_in_btn"),
    sign_in = document.querySelector('#sign_in_link'),
    sign_in_form = document.querySelector("#sign_in_form"),
    sign_up_form = document.querySelector("#sign_up_form"),
    email2 = document.getElementById('email2'),
    password2 = document.getElementById('password2'),
    errorMsg2 = document.querySelectorAll(".error2");

const validateEmail =(email, error_msg,btn,param)=>{
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        msg_email = "Enter valid email";
    if(!regEmail.test(email.value)) {
        email.style.borderBottom = "1px solid #A7171A";
        error_msg.innerHTML = msg_email;
    }
    else{
        email.style.borderBottom = "1px solid #71C562";
        error_msg.innerHTML = "";
        email.classList.add("valid");
        buttonController(btn,param);
    }
}
const validateName =(names,btn,param)=>{
    let regName = /[A-Za-zА-Яа-я]/,
        msg_name = "Enter valid First name",
        msg_lastname = "Enter valid Last Name";
    if(!regName.test(names[0].value))
    {
        names[0].style.borderBottom = "1px solid #A7171A";
        errorMsg[0].innerHTML = msg_name;
    }
    else
    {
        names[0].style.borderBottom = "1px solid #71C562";
        errorMsg[0].innerHTML = "";
        names[0].classList.add("valid");
        buttonController(btn,param);
    }
}
const validateLastName =(names,btn,param)=>{
    let regName = /[A-Za-zА-Яа-я]/,
        msg_name = "Enter valid First name",
        msg_lastname = "Enter valid Last Name";
    if(!regName.test(names[1].value))
    {
        names[1].style.borderBottom = "1px solid #A7171A";
        errorMsg[1].innerHTML = msg_lastname;
    }
    else
    {
        names[1].style.borderBottom = "1px solid #71C562";
        errorMsg[1].innerHTML = "";
        names[1].classList.add("valid");
        buttonController(btn,param);
    }
}
const validateFirstPassword =(password, error_msg,btn,param)=>{
    let regPassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/,
        msg_password ="Enter valid password.\n The password must contain letters, numbers and must be at least 8 in length.";
    if (!regPassword.test(password.value)) {
        password.style.borderBottom = "1px solid #A7171A";
        error_msg.innerHTML = msg_password;
    } else {
        password.style.borderBottom = "1px solid #71C562";
        error_msg.innerHTML = "";
        password.classList.add("valid")
        buttonController(btn,param);
    }
}
const validateMatchingPassword =(rep_password,btn,param)=>{
    let msg_repeat_password ="Passwords don't match";
    if ((rep_password.value !== password.value)) {
        rep_password.style.borderBottom = "1px solid #A7171A";
        errorMsg[4].innerHTML = msg_repeat_password;
    } else {
        rep_password.style.borderBottom = "1px solid #71C562";
        errorMsg[4].innerHTML = "";
        rep_password.classList.add("valid")
        buttonController(btn,param);
    }
}
const buttonController =(btn,param)=> {
    console.log(param);
    if(param ==='sign_in'){
        if(email2.classList.contains('valid') & password2.classList.contains('valid')) {
            console.log("yes!");
            btn.disabled = false;
        } else {
            console.log("no");
        }
    }
    else
    {
        if(names[0].classList.contains('valid')& names[1].classList.contains('valid') &email.classList.contains('valid')& passwords[0].classList.contains('valid') & passwords[1].classList.contains('valid'))
        {
            console.log("yes!");
            btn.disabled = false;
        }
        else{
            console.log("no");
        }
    }
}
names[0].oninput = (e) => validateName(names,sign_up_btn,'sign_up');
names[1].oninput = (e) => validateLastName(names,sign_up_btn,'sign_up');
email.oninput = (e) => validateEmail(email, errorMsg[2],sign_up_btn,'sign_up');
password.oninput = (e) => validateFirstPassword(password, errorMsg[3],sign_up_btn,'sign_up');
rep_password.oninput = (e) => validateMatchingPassword(rep_password,sign_up_btn,'sign_up');
sign_in.onclick= function (e)
{
    sign_in_form.style.display = 'block';
    sign_up_form.style.display = 'none';
    email2.oninput = (e) => validateEmail(email2,errorMsg2[0],sign_in_btn,'sign_in');
    password2.oninput = (e) => validateFirstPassword(password2, errorMsg2[1],sign_in_btn,'sign_in');
}