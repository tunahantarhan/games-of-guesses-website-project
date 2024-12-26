function goToFlagGame(){
    //location.href = "flagGamePage.html";  ---> Changes the current pages URL.
    window.open("flagGamePage.html", "_blank");     //Used this to open the page in a new tab.
}

function goToEmojiGame(){
    window.open("emojiGamePage.html", "_blank");
}

function goToLuckyPage(){
    window.open("feelingLuckyPage.html", "_blank");
}

let name = prompt("How'd you like to be called? :")
document.getElementById("greetingText").innerHTML = "Hi, " + name + "! ";