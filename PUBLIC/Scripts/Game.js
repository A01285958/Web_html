window.onload = () => {
    if (!sessionStorage.name) {
        window.location = "../index.html";
    } else {
      const menuGame = document.getElementById("menuGame");
      menuGame.setAttribute("href", "../Paginas/Game.html?user_id=" + sessionStorage.id);
    }
  };
  

  
  