function validate() {
    const pass = document.getElementById("password");
    const cpass = document.getElementById("confirmpassword");
    if (pass == cpass && pass != "" && cpass != "") {
        alert("you logged in successfully")
    }
    else {
        alert("Invalid password")
    }
}