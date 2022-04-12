function validate() {
    var username = document.loginform.user.value;
    var password = document.loginform.pass.value;

    username = username.trim();
    password = password.trim();

    if(username == null || username == ''){
        alert("username cannot be empty");
        return false;
    }

    if(password.length < 6){
        alert("password must be atleast of 6 characters");
        return false;
    }
    return true;
}