function validateform() {
    var name = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    if (name == null || name == "") {
        alert("invalid username");
        return false;
    }
    else if (password.length < 6) {
        alert("invalid password");
        return false;
    }




}