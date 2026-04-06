
document.addEventListener("DOMContentLoaded", function () {
   
    Year();
    checkEmail();
    getpagename();
});

function Year() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("copyright").innerHTML = `<span id="dates"> © ${year} Blog Platform</span>`;
   
}

async function checkEmail() {
   
    let currentUser = localStorage.getItem("loggedInUser"); 

    let location = getpagename();
    
   
    if (location === "create.html" || location === "blogs.html" || location === "single-blog.html" || location === "profile.html") {
        if (!currentUser) {
             Swal.fire({
                title: "Error",
                text: "Need an Account ",
                icon: "error",
                theme: 'dark',
                confirmButtonColor: "#000000"
            });
            await sleep(1800);
            window.location.href = "login.html";
        }   
    }

    
    if (currentUser && location !== "profile.html") {
        const checkstored = localStorage.getItem("userProfileImage");
        const Userimgpath = "./assets/images/User.png";
        let userProfileImage = checkstored ? checkstored : Userimgpath;

       
        document.getElementById("logoutbt").innerHTML = `
            <button onclick="localStorage.removeItem('loggedInUser'); location.href='login.html';">
                Logout
            </button>`;
        
        document.getElementById("profpic").innerHTML = `
            <a href="profile.html">
                <img class="profile-pic" src="${userProfileImage}" alt="profile-pic">
            </a>`;
            
        if (document.getElementById("loginbt")) {
            document.getElementById("loginbt").style.display = "none";
        }
    }
}

function getpagename() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    return page;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}



