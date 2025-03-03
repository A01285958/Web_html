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

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
    chat.value += "\n" + msg.value;
    msg.value ="";
}

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        sendMsg();
    }
})


