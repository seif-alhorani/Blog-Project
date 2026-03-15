
function handleContactSubmit(event) {
    event.preventDefault();

    if (validateContactForm() === true) {
    
        sendMail();
    }
}


function sendMail(){
    let parms = {
        name : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("serviceKey","temp_id",parms).then(() => alert("Send successfully!")).catch((err) => console.log(err));
}