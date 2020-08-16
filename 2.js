function validate() {
    if (Email != "" || Username != "" || Password != "") {

        document.write("user");
        document.write("email");
        document.write("password")


    }
    else {
        alert("you haven't filled the form properply")
    }
}

function clearform() {
    document.querySelector("user");
    document.querySelector("email");
    document.querySelector("password");
}