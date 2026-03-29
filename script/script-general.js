
document.addEventListener("DOMContentLoaded",function(){
    Year();
});
function Year(){
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("copyright").innerHTML = `<span id="dates"> © ${year} Blog Platform</span>`;
}

