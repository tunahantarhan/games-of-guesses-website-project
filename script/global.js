function darkMode(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(13, 20, 26), rgb(33, 50, 63))";
    document.body.style.backgroundColor = "rgb(33,50,63)";
    document.body.style.color = "white";
}

function lightMode(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(89, 89, 89), rgb(191, 191, 191))";
    document.body.style.backgroundColor = "rgb(89, 89, 89)";
    document.body.style.color = "black";
    document.getElementById("gameAreaDiv_Flag").style.color = "white";
    document.getElementById("gameAreaDiv_Emoji").style.color = "white";
}

function goToMainPage(){
    window.open("index.html", "_blank");
}


