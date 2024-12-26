function darkMode_Lucky(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(23, 19, 20), rgb(45, 45, 45))";
    document.body.style.backgroundColor = "rgb(46, 45, 45)";
    document.body.style.color = "white";
}

function lightMode_Lucky(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(89, 89, 89), rgb(191, 191, 191))";
    document.body.style.backgroundColor = "rgb(113,112,112)";
    document.body.style.color = "black";
    document.getElementById("gameAreaDiv_Flag").style.color = "white";
    document.getElementById("gameAreaDiv_Emoji").style.color = "white";
}

function goToMainPage_Lucky(){
    window.open("feelingLuckyPage.html", "_blank");
}