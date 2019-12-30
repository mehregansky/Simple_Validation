var username = document.forms["vform"]["username"];
var password = document.forms["vform"]["password"];

var name_error = document.getElementById("name_error");
var password_error = document.getElementById("password_error");

var error = document.createElement("p");
var uname_input = document.getElementById("password")[0];

username.addEventListener("blur", nameVerify, true);
password.addEventListener("blur", passwordVerify, true);

function Validate(){
    if(username.value == ""){
			uname_input.insertBefore(error, uname_input);
			error.innerHTML = "Username is requiered"
			error.style.border = "solid 1px red";
      error.focus();
      return false;

      // username.style.border = "solid 1px red";
      // name_error.textContent = "Username is required";
      // username.focus();
      // return false;
    }

    if(password.value == ""){
        password.style.border = "solid 1px red";
        password_error.textContent = "Password is required";
        password.focus();
        return false;
    }
}

function nameVerify(){
    if(username.value != ""){
        username.style.border = "solid 1px #5e6e66";
        name_erroe.innerHTML = "";
        return true;
    }
}

function passwordVerify(){
    if(password.value != ""){
        password.style.border = "solid 1px #5e6e66";
        name_erroe.innerHTML = "";

            // document.getElementsByClassName("btn").onclick = function () {
            // location.href = first.html;
            // }
        return true;
    }
}