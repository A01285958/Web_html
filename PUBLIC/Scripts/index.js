// console.log("Hola");
// prompt("Nombre....");
// confirm("Quieres borrar?");

const username =document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");

const login = async(event) => {
    event.preventDefault();
    const user = {
        username: username.value, 
        password: password.value
    };
    const respuesta = await fetch("http://localhost:4000/login",{
        method: "POST", 
        headers:{"content-type":"application/json"},
        body: JSON.stringify(user),
    });

    const data = await respuesta.json();
    if(data.islogin){
        sessionStorage.setItem("id", data.user.user_id);
        sessionStorage.setItem("name",data.user.first_name);
        window.location.href = "../Paginas/Home.html?user_id="+ data.user.user_id;
    }else{
        alert("Credenciales Incorrectas");
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);
password.addEventListener("keydown", (e) => {if(e.key ==="Enter"){
    login();
}});





