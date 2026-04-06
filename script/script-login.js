document.getElementById("loginform").addEventListener("submit",function(e){
    e.preventDefault();

    let emailInputs = document.getElementById("email").value.trim();
    let registerdemail = JSON.parse(localStorage.getItem("emails")) || [];

    if(registerdemail.includes(emailInputs)){
       
        localStorage.setItem("loggedInUser",emailInputs);

        window.location.href="home.html";
    }else{

        Swal.fire({
            title: "Login Failed",
            text: "This email is not registered. Please sign up first.",
            icon: "error",
            confirmButtonColor: "#000000",
            theme:"dark"
        });
    }
});