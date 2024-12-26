document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("selectedLanguage").value = "1";
    document.getElementById("selectedGenre").value = "";
    document.getElementById("selectedMood").value = "";
});     //Set values to the default on page refresh.


let selectedLanguageValue, selectedGenreValue, selectedMoodValue;

function giveRandomAlbum(){
    selectedLanguageValue = parseInt(document.getElementById("selectedLanguage").value);
    selectedGenreValue = parseInt(document.getElementById("selectedGenre").value);
    selectedMoodValue = parseInt(document.getElementById("selectedMood").value);

    console.log("language: "+ selectedLanguageValue);
    console.log("genre: " + selectedGenreValue);

    console.log("mood: " + selectedMoodValue);
    //EN
    if(selectedLanguageValue === 1){
        //EN --> Rock
        if(selectedGenreValue === 1){
            //EN --> Rock --> Energetic
            if(selectedMoodValue === 1){
                showGivenAlbumArea();
                randomAlbum_EN_Rock_Energetic();
            }
            //EN --> Rock --> Calm
            else if( selectedMoodValue === 2){
                showGivenAlbumArea();
                randomAlbum_EN_Rock_Calm();
            }
            else{
                window.alert("Please make selections properly.");
            }
        }

        //EN --> Pop
        else if(selectedGenreValue === 2){
            //EN --> Pop --> Energetic
            if(selectedMoodValue === 1){
                showGivenAlbumArea();
                randomAlbum_EN_Pop_Energetic()
            }
            //EN --> Pop --> Calm
            else if(selectedMoodValue === 2){
                showGivenAlbumArea();
                randomAlbum_EN_Pop_Calm();
            }
            else{
                window.alert("Please make selections properly.");
            }
        }

        else{
            window.alert("Please make selections properly.")
        }
    }
    else{
        window.alert("Please make selections properly.");
    }
}

function randomAlbum_EN_Rock_Energetic(){
    let a = Math.floor(Math.random() * 3);
    switch (a){
        case 0:
            //console.log("CASE 0")
            document.getElementById("albumName").innerHTML = "Back in Black<br>by<br><b><i>AC/DC</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/back-in-black.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/6mUdeDZCsExyJLMdAfDuwh?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openAbbeyRoadSpotify);
            document.getElementById("albumCover").removeEventListener("click", openDynastySpotify);
            document.getElementById("albumCover").addEventListener("click", openBackInBlackSpotify);
            break;
        case 1:
            //console.log("CASE 1");
            document.getElementById("albumName").innerHTML = "Dynasty<br>by<br><b><i>KISS</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/dynasty.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/4FA68GsblSfvKZZRfM1tI1?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openAbbeyRoadSpotify);
            document.getElementById("albumCover").addEventListener("click", openDynastySpotify);
            document.getElementById("albumCover").removeEventListener("click", openBackInBlackSpotify);
            break;
        case 2:
            //console.log("CASE 2");
            document.getElementById("albumName").innerHTML = "Abbey Road<br>by<br><b><i>The Beatles</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/abbey-road.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/0ETFjACtuP2ADo6LFhL6HN?utm_source=generator&theme=0";


            document.getElementById("albumCover").addEventListener("click", openAbbeyRoadSpotify);
            document.getElementById("albumCover").removeEventListener("click", openDynastySpotify);
            document.getElementById("albumCover").removeEventListener("click", openBackInBlackSpotify);
            break;
    }
}
function randomAlbum_EN_Rock_Calm(){
    let b = Math.floor(Math.random() * 3);
    switch (b){
        case 0:
            //console.log("CASE 0")
            document.getElementById("albumName").innerHTML = "Wish You Were Here<br>by<br><b><i>Pink Floyd</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/wish-you-were-here.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/6uvBKDGlJAYLH5Vy6RQVsc?utm_source=generator&theme=0";


            document.getElementById("albumCover").addEventListener("click", openWishYouWereHereSpotify);
            document.getElementById("albumCover").removeEventListener("click", openGYBrickRoad);
            document.getElementById("albumCover").removeEventListener("click", openScarecrowSpotify);
            break;
        case 1:
            //console.log("CASE 1");
            document.getElementById("albumName").innerHTML = "Goodbye Yellow Brick Road<br>by<br><b><i>Elton John</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/goodbye-yellow-brick-road.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/5WupqgR68HfuHt3BMJtgun?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openWishYouWereHereSpotify);
            document.getElementById("albumCover").addEventListener("click", openGYBrickRoad);
            document.getElementById("albumCover").removeEventListener("click", openScarecrowSpotify);
            break;
        case 2:
            //console.log("CASE 2");
            document.getElementById("albumName").innerHTML = "Scarecrow<br>by<br><b><i>John Mellencamp</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/scarecrow.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/1BYEhfr8qQGNhbqPAbfnxk?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openWishYouWereHereSpotify);
            document.getElementById("albumCover").removeEventListener("click", openGYBrickRoad);
            document.getElementById("albumCover").addEventListener("click", openScarecrowSpotify);
            break;
    }
}
function randomAlbum_EN_Pop_Energetic(){
    let c = Math.floor(Math.random() * 3);
    switch (c){
        case 0:
            //console.log("CASE 0")
            document.getElementById("albumName").innerHTML = "GIRL<br>by<br><b><i>Pharrell Williams</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/girl.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/0lrmy4pJINsFzycJvttX2W?utm_source=generator&theme=0";

            document.getElementById("albumCover").addEventListener("click", openGirlSpotify);
            document.getElementById("albumCover").removeEventListener("click", openTheFameSpotify);
            document.getElementById("albumCover").removeEventListener("click", openUptownSpecialSpotify);
            break;
        case 1:
            //console.log("CASE 1");
            document.getElementById("albumName").innerHTML = "The Fame<br>by<br><b><i>Lady Gaga</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/the-fame.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/1qwlxZTNLe1jq3b0iidlue?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openGirlSpotify);
            document.getElementById("albumCover").addEventListener("click", openTheFameSpotify);
            document.getElementById("albumCover").removeEventListener("click", openUptownSpecialSpotify);
            break;
        case 2:
            //console.log("CASE 2");
            document.getElementById("albumName").innerHTML = "Uptown Special<br>by<br><b><i>Mark Ronson</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/uptown-special.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/3vLaOYCNCzngDf8QdBg2V1?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openGirlSpotify);
            document.getElementById("albumCover").removeEventListener("click", openTheFameSpotify);
            document.getElementById("albumCover").addEventListener("click", openUptownSpecialSpotify);
            break;
    }
}
function randomAlbum_EN_Pop_Calm(){
    let d = Math.floor(Math.random() * 3);
    switch (d){
        case 0:
            //console.log("CASE 0")
            document.getElementById("albumName").innerHTML = "folklore<br>by<br><b><i>Taylor Swift</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/folklore.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator&theme=0";


            document.getElementById("albumCover").addEventListener("click", openFolkloreSpotify);
            document.getElementById("albumCover").removeEventListener("click", open21Spotify);
            document.getElementById("albumCover").removeEventListener("click", openOnlyHumanSpotify);
            break;
        case 1:
            //console.log("CASE 1");
            document.getElementById("albumName").innerHTML = "21<br>by<br><b><i>Adele</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/21-adele.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/5duyQokC4FMcWPYTV9Gpf9?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openFolkloreSpotify);
            document.getElementById("albumCover").addEventListener("click", open21Spotify);
            document.getElementById("albumCover").removeEventListener("click", openOnlyHumanSpotify);
            break;
        case 2:
            //console.log("CASE 2");
            document.getElementById("albumName").innerHTML = "Only Human<br>by<br><b><i>Calum Scott</i></b>";
            document.getElementById("albumCover").src = "../assets/albumCovers/only-human.png";
            document.getElementById("spotifyEmbedFrame").src = "https://open.spotify.com/embed/album/6Vip5A5NmEazvKuxj6GLYf?utm_source=generator&theme=0";


            document.getElementById("albumCover").removeEventListener("click", openFolkloreSpotify);
            document.getElementById("albumCover").removeEventListener("click", open21Spotify);
            document.getElementById("albumCover").addEventListener("click", openOnlyHumanSpotify);
            break;
    }
}

function showGivenAlbumArea(){
    document.getElementById("albumPickerMainArea").style.display = "none";
    document.getElementById("selectionsArea").style.display = "none";
    document.getElementById("giveAlbumButton").style.display = "none";

    document.getElementById("givenAlbumArea").style.display = "inline-block";
}

let albumCover = document.getElementById("albumCover");
albumCover.onmouseover = function (){
   albumCover.style.boxShadow =  "0 12px 30px 0 #97765c";
}
albumCover.onmouseout = function (){
    albumCover.style.boxShadow = "none";
}


//ALBUM REDIRECTING FUNCTIONS
function openBackInBlackSpotify() {
    window.open("https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh", "_blank");
}
function openDynastySpotify() {
    window.open("https://open.spotify.com/album/4FA68GsblSfvKZZRfM1tI1", "_blank");
}
function openAbbeyRoadSpotify() {
    window.open("https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN", "_blank");
}
function openWishYouWereHereSpotify() {
    window.open("https://open.spotify.com/album/6uvBKDGlJAYLH5Vy6RQVsc", "_blank");
}
function openGYBrickRoad() {
    window.open("https://open.spotify.com/album/5WupqgR68HfuHt3BMJtgun?highlight=spotify:track:4IRHwIZHzlHT1FQpRa5RdE", "_blank");
}
function openScarecrowSpotify() {
    window.open("https://open.spotify.com/album/1BYEhfr8qQGNhbqPAbfnxk?si=nVrypFbSRr6K53OYP0PrbA", "_blank");
}
function openGirlSpotify() {
    window.open("https://open.spotify.com/album/0lrmy4pJINsFzycJvttX2W?si=_3d2OxT0TYivNlVp-jNYmQ", "_blank");
}
function openTheFameSpotify() {
    window.open("https://open.spotify.com/album/1qwlxZTNLe1jq3b0iidlue?si=TGnogY7IR3WeAfNTrWTXqg", "_blank");
}
function openUptownSpecialSpotify() {
    window.open("https://open.spotify.com/album/3vLaOYCNCzngDf8QdBg2V1?si=ouGMWmwmTRO9BKcwaLfdnQ", "_blank");
}
function openFolkloreSpotify() {
    window.open("https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=i_ctjWfRTdOPE2qAlwvJ3Q", "_blank");
}
function open21Spotify() {
    window.open("https://open.spotify.com/album/5duyQokC4FMcWPYTV9Gpf9?si=IuhWaRmVSKCeCr8eVqx3JA", "_blank");
}
function openOnlyHumanSpotify() {
    window.open("https://open.spotify.com/album/6Vip5A5NmEazvKuxj6GLYf?si=p9rzX3yyRuyYn1tx22WF1Q", "_blank");
}
