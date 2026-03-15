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
}
function validateSignupForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    if (name == "") {
        alert("Full Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (cpassword == "") {
        alert("Confirm passowrd must be filled out");
        return false;
    }
    if(cpassword != password){
         alert("Confirm passowrd not the same as password");
        return false;
    }
}

function validateContactForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Full Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (subject == "") {
        alert("Subject must be filled out");
        return false;
    }
      if (message == "") {
        alert("Message must be filled out");
        return false;
    }
}