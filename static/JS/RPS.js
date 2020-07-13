var player_score = 0;
var computer_score = 0;

const playerScore = document.querySelector(".score-player p");
const computerScore = document.querySelector(".score-computer p");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const img = document.createElement("img");
const imgS = document.createElement("img");
const options = document.querySelectorAll(".btn button");
const computerOptions = ["/static/Images/rock.png", "/static/Images/paper.png", "/static/Images/scissors.png"];
const pro = document.querySelector(".nav-items li a");

pro.style.color = "black";

function rockButton() {
    const computerNumber1 = Math.floor(Math.random() * 3);
    img.src = "static/Images/rock.png";
    image1.appendChild(img);
    imgS.src = computerOptions[computerNumber1];
    image2.appendChild(imgS);

    if (img.src === imgS.src) {
        document.querySelector(".match h1").textContent = "Tie!";
    } else if (computerOptions[computerNumber1] === "/static/Images/paper.png") {
        document.querySelector(".match h1").textContent = "Computer Wins!";
        computer_score++;
        computerScore.textContent = computer_score;
    } else {
        document.querySelector(".match h1").textContent = "Player Wins!";
        player_score++;
        playerScore.textContent = player_score;
    }
}

function paperButton() {
    const computerNumber2 = Math.floor(Math.random() * 3);
    img.src = "/static/Images/paper.png";
    image1.appendChild(img);
    imgS.src = computerOptions[computerNumber2];
    image2.appendChild(imgS);

    if (img.src === imgS.src) {
        document.querySelector(".match h1").textContent = "Tie!";
    } else if (computerOptions[computerNumber2] === "/static/Images/scissors.png") {
        document.querySelector(".match h1").textContent = "Computer Wins!";
        computer_score++;
        computerScore.textContent = computer_score;
    } else {
        document.querySelector(".match h1").textContent = "Player Wins!";
        player_score++;
        playerScore.textContent = player_score;
    }
}

function scissorButton() {
    const computerNumber3 = Math.floor(Math.random() * 3);
    img.src = "/static/Images/scissors.png";
    image1.appendChild(img);
    imgS.src = computerOptions[computerNumber3];
    image2.appendChild(imgS);

    if (img.src === imgS.src) {
        document.querySelector(".match h1").textContent = "Tie!";
    } else if (computerOptions[computerNumber3] === "/static/Images/rock.png") {
        document.querySelector(".match h1").textContent = "Computer Wins!";
        computer_score++;
        computerScore.textContent = computer_score;
    } else {
        document.querySelector(".match h1").textContent = "Player Wins!";
        player_score++;
        playerScore.textContent = player_score;
    }
}


