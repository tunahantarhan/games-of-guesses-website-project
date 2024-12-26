function startFlagGame(){
    document.getElementById("gameName_Flag").style.display = "none";
    //document.querySelector("#gameName_Flag").style.display = "none"; would be the same.
    document.getElementById("introductionText_Flag").style.display = "none";
    document.getElementById("goodLuckText_Flag").style.display = "none";
    document.getElementById("startGameButton_Flag").style.display = "none";

    elapsedTime = 0;
    intervalID = setInterval(function (){
        elapsedTime++;
        document.getElementById("gameTime_Flag").innerHTML = "Seconds : " + elapsedTime;
    },1000);
    randomCountryFlag();
    document.getElementById("gameAreaDiv_Flag").style.display = "block";
}

//------------------//

let score = 0;
let numberOfQuestion_flag = 1;
const correctAnswers_flag = [];
const userAnswers_flag = [];

let intervalID;
let elapsedTime = 0;

document.getElementById("questionNumber_Flag").innerHTML = "Question Number: " + numberOfQuestion_flag + "/5";

function randomCountryFlag(){
    let i = Math.floor(Math.random() * 10);
    switch (i){
        case 0:
            document.getElementById("countryFlag").innerHTML = "🇳🇴";
            correctAnswers_flag.push("NORWAY");
            break;
        case 1:
            document.getElementById("countryFlag").innerHTML = "🇫🇷";
            correctAnswers_flag.push("FRANCE");
            break;
        case 2:
            document.getElementById("countryFlag").innerHTML = "🇬🇧";
            correctAnswers_flag.push("UNITED KINGDOM");
            break;
        case 3:
            document.getElementById("countryFlag").innerHTML = "🇧🇷";
            correctAnswers_flag.push("BRAZIL");
            break;
        case 4:
            document.getElementById("countryFlag").innerHTML = "🇧🇦";
            correctAnswers_flag.push("BOSNIA");
            break;
        case 5:
            document.getElementById("countryFlag").innerHTML = "🇯🇲";
            correctAnswers_flag.push("JAMAICA");
            break;
        case 6:
            document.getElementById("countryFlag").innerHTML = "🇿🇦";
            correctAnswers_flag.push("SOUTH AFRICA");
            break;
        case 7:
            document.getElementById("countryFlag").innerHTML = "🇨🇦";
            correctAnswers_flag.push("CANADA");
            break;
        case 8:
            document.getElementById("countryFlag").innerHTML = "🇰🇷";
            correctAnswers_flag.push("SOUTH KOREA");
            break;
        case 9:
            document.getElementById("countryFlag").innerHTML = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
            correctAnswers_flag.push("WALES");
            break;
    }
}

function pushUserEntryFlag(){
    if (numberOfQuestion_flag < 6){
        let userEntry = document.getElementById("userAnswer_Flag").value;
        userAnswers_flag.push(userEntry.toUpperCase());
        document.getElementById("userAnswer_Flag").value = "";      //This clears text in input box after submit.

        console.log("Correct Answers Array : " + correctAnswers_flag);
        console.log("User Answers Array : " + userAnswers_flag);

        numberOfQuestion_flag++;
        document.getElementById("questionNumber_Flag").innerHTML = "Question Number: " + numberOfQuestion_flag + "/5";

        randomCountryFlag();

        if (numberOfQuestion_flag === 5){            //at the question 5 change the button.
            document.getElementById("guessButton_Flag").style.display = "none";
            document.getElementById("finishTheGameButton_Flag").style.display = "inline-block";
        }
    }
}


function finishTheFlagGame(){
    let userEntry = document.getElementById("userAnswer_Flag").value;
    userAnswers_flag.push(userEntry.toUpperCase());
    document.getElementById("userAnswer_Flag").value = "";

    console.log("Correct Answers Array : " + correctAnswers_flag);
    console.log("User Answers Array : " + userAnswers_flag);

    document.getElementById("questionNumber_Flag").style.display = "none";
    document.getElementById("gameTime_Flag").style.display = "none";
    document.getElementById("countryFlag").style.display = "none";
    document.getElementById("userInputPlaceDiv_Flag").style.display = "none";
    document.getElementById("gameButtonsDiv_Flag").style.display = "none";

    document.getElementById("resultText_Flag").style.display = "block";
    document.getElementById("restartButton_Flag").style.display = "inline-block";

    calculatingScoreFlag();
}

function calculatingScoreFlag(){
    //debugger;             ---- I used a debugger in here to figure out why score was not counting. ----
    if (correctAnswers_flag.toString() === userAnswers_flag.toString()){
        document.getElementById("goldenStarImage_Flag").style.display = "inline-block";
        document.getElementById("resultText_Flag").innerHTML = "Game has ended!<br>" +
            "<span style='color: #6ff17b; font-family: Eight Bit Dragon'>CONGRATULATIONS!</span>" +
            "<br>You guessed <span style='color: #6ff17b; font-family: Eight Bit Dragon'>5/5!</span><br>" +
            "Your game time is <span style='color: #6ff17b; font-family: Eight Bit Dragon'>"+ elapsedTime + "</span> seconds." ;
    }
    else{
        for (let i = 0; i < userAnswers_flag.length; i++){
            if (userAnswers_flag[i] === correctAnswers_flag[i]){
                score++;
            }
        }
        console.log("Score : " + score);
        document.getElementById("resultText_Flag").innerHTML = "Game has ended! <br>" +
            "You <span style='color: #e33131; font-family: Eight Bit Dragon'>COULDN'T GUESS</span> all of them..." +
            "<br> You guessed <span style='color: #f46f6c; font-family: Eight Bit Dragon'>" + score + "/5!</span><br>" +
            "Your game time is <span style='color: #f46f6c; font-family: Eight Bit Dragon'>" + elapsedTime + "</span> seconds.";
    }
}

document.getElementById("questionNumber_Emoji").innerHTML = "Question Number: " + numberOfQuestion_emoji + "/5";