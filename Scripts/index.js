// console.log("Hola");
// prompt("Nombre....");
// confirm("Quieres borrar?");

const username =document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");

const login = (event) => {
    //console.log(username.value, password.value);
    event.preventDefault(); // Evita que la pagina recargue antes de redirrecionar
    if(username.value ==="rosy" && password.value === "123"){
        sessionStorage.setItem("name","Rosila Muñoz");
        window.location.href = "../Paginas/Home.html";
    }else{
        alert("Credenciales Incorrectas");
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);
password.addEventListener("keydown", (e) => {if(e.key ==="Enter"){
    login();
}});





