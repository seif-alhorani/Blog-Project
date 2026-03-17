function validateLoginForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    return true;
}
function validateSignupForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("cpasswordError").innerHTML = "";
    document.getElementById("notequalpasswordcpssword").innerHTML = "";

    if (name.trim == "") {
        document.getElementById("nameError").innerHTML = "Full Name is required";
        return false;
    }
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        return false;
    }
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        return false;
    }
    if (cpassword == "") {
        document.getElementById("cpasswordError").innerHTML = "Confirm is required";
        return false;
    }
    if (cpassword != password) {
        document.getElementById("notequalpasswordcpssword").innerHTML = "Confirm Password And the Orginal Password dosent match ";
        return false;
    }
    return true;
}

function validateContactForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    if (name.trim() == "") {
        document.getElementById("nameError").innerHTML = "Full Name is required";
        return false;
    }
    if (email.trim() == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        return false;
    }
    if (subject.trim() == "") {
        document.getElementById("subjectError").innerHTML = "Subject is required";
        return false;
    }
    if (message.trim() == "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        return false;
    }
    return true;
}