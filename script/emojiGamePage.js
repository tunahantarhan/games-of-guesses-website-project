function startEmojiGame(){
    document.getElementById("welcomingAreaDiv_Emoji").style.display = "none";
    document.getElementById("resultArea_Emoji").style.display = "none";
    document.getElementById("gameAreaDiv_Emoji").style.display = "inline-block";

    document.getElementById("questionNumber_Emoji").innerHTML = "Question Number : 1/5";
    score = 0;
    numberOfQuestion_emoji = 0;
    elapsedTime = 0;

    intervalID = setInterval(function (){
        elapsedTime++;
        document.getElementById("gameTime_Emoji").innerHTML = "Seconds : " + elapsedTime;
    },1000)
    randomCountryEmojis();
}

let score = 0;
let numberOfQuestion_emoji = 0;

let intervalID;
let elapsedTime = 0;

function trueAnswerHandler(){
    makeGuess(true);
}

function falseAnswerHandler(){
    makeGuess(false);
}

function randomCountryEmojis(){
    //First it clears every possible added multipleSelection buttons events.
    document.getElementById("multipleSelection1").removeEventListener("click", falseAnswerHandler);
    document.getElementById("multipleSelection1").removeEventListener("click", trueAnswerHandler);
    document.getElementById("multipleSelection2").removeEventListener("click", falseAnswerHandler);
    document.getElementById("multipleSelection2").removeEventListener("click", trueAnswerHandler);
    document.getElementById("multipleSelection3").removeEventListener("click", falseAnswerHandler);
    document.getElementById("multipleSelection3").removeEventListener("click", trueAnswerHandler);
    document.getElementById("multipleSelection4").removeEventListener("click", falseAnswerHandler);
    document.getElementById("multipleSelection4").removeEventListener("click", trueAnswerHandler);
    let t = Math.floor(Math.random() * 6);
    switch (t){
        case 0:
            document.getElementById("emojis").innerHTML = "🥖🐓🗼👨‍🎨🍇";
            document.getElementById("multipleSelection1").innerHTML = "Japan";
            document.getElementById("multipleSelection1").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "France";
            document.getElementById("multipleSelection2").addEventListener("click", trueAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "Belgium";
            document.getElementById("multipleSelection3").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "Germany";
            document.getElementById("multipleSelection4").addEventListener("click", falseAnswerHandler);

            break;
        case 1:
            document.getElementById("emojis").innerHTML = "🦅🗽🏈⚾️";
            document.getElementById("multipleSelection1").innerHTML = "Egypt";
            document.getElementById("multipleSelection1").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "Greece";
            document.getElementById("multipleSelection2").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "USA";
            document.getElementById("multipleSelection3").addEventListener("click", trueAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "China";
            document.getElementById("multipleSelection4").addEventListener("click", falseAnswerHandler);

            break;
        case 2:
            document.getElementById("emojis").innerHTML = "🐃🍅☀️";
            document.getElementById("multipleSelection1").innerHTML = "Spain";
            document.getElementById("multipleSelection1").addEventListener("click", trueAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "Turkey";
            document.getElementById("multipleSelection2").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "Mexico";
            document.getElementById("multipleSelection3").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "China";
            document.getElementById("multipleSelection4").addEventListener("click", falseAnswerHandler);

            break;
        case 3:
            document.getElementById("emojis").innerHTML = "🍕🍝️☕️☀️";
            document.getElementById("multipleSelection1").innerHTML = "Spain";
            document.getElementById("multipleSelection1").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "Egypt";
            document.getElementById("multipleSelection2").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "USA";
            document.getElementById("multipleSelection3").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "Italy";
            document.getElementById("multipleSelection4").addEventListener("click", trueAnswerHandler);

            break;
        case 4:
            document.getElementById("emojis").innerHTML = "❄️🌲🦌🍁";
            document.getElementById("multipleSelection1").innerHTML = "Russia";
            document.getElementById("multipleSelection1").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "Iceland";
            document.getElementById("multipleSelection2").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "Canada";
            document.getElementById("multipleSelection3").addEventListener("click", trueAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "Norway";
            document.getElementById("multipleSelection4").addEventListener("click", falseAnswerHandler);

            break;
        case 5:
            document.getElementById("emojis").innerHTML = "⚽️🫖👑🐟🍟"
            document.getElementById("multipleSelection1").innerHTML = "Germany";
            document.getElementById("multipleSelection1").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection2").innerHTML = "USA";
            document.getElementById("multipleSelection2").addEventListener("click", falseAnswerHandler);

            document.getElementById("multipleSelection3").innerHTML = "United Kingdom";
            document.getElementById("multipleSelection3").addEventListener("click", trueAnswerHandler);

            document.getElementById("multipleSelection4").innerHTML = "China";
            document.getElementById("multipleSelection4").addEventListener("click", falseAnswerHandler);

            break;
    }
}

function makeGuess(isTrueAnswer){
    if(numberOfQuestion_emoji < 5){
        if(isTrueAnswer){
            score++;
        }
        if(numberOfQuestion_emoji < 4){
            numberOfQuestion_emoji++;
            randomCountryEmojis();
        }else{  //RESULT SCREEN
            clearInterval(intervalID);

            document.getElementById("gameAreaDiv_Emoji").style.display = "none";

            document.getElementById("resultArea_Emoji").style.display = "inline-block";
            document.getElementById("resultText_Emoji").innerHTML = "<span style='color: #3f51ae'>Score : </span>" + score + "/5<br><span style='color: #3f51ae'>Game Time : </span>" + elapsedTime + " seconds";
            document.getElementById("restartButton_Emoji").style.display = "inline-block";
        }

        document.getElementById("questionNumber_Emoji").innerHTML = "Question Number: " + (numberOfQuestion_emoji + 1) + "/5";
    }
}