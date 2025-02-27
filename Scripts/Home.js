window.onload = () =>{
    if(!sessionStorage.name){
        window.location="../index.html"
    }
};
const h1 = document.getElementById("saludo");
h1.innerHTML = "Hola! " + sessionStorage.name;

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

