window.onload = () =>{
    if(!sessionStorage.name){
        window.location="../index.html"
    }
};

const btnLogOut = document.getElementById("btnLogOut");

const LogOut = (event) => {
    event.preventDefault();
    confirmLogOut = confirm("Salir de cuenta?");
    if(confirmLogOut){
        window.location.href = "../index.html";
    }
};

btnLogOut.addEventListener("click", () =>{
    sessionStorage.removeItem("name");
});
btnLogOut.addEventListener("click",LogOut);