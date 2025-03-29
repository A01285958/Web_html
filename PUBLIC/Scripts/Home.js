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

const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('user_id') || 1;
const gameUrl = `../TC2005B/index.html?user_id=${userID}`;
document.getElementById('videogame').src = gameUrl;

const id = sessionStorage.getItem("id");
document.getElementById("menuGame").setAttribute("href", "../Paginas/Game.html?user_id=" + id);

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        sendMsg();
    }
})


