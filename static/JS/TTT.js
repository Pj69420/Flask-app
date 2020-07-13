var playerX_score = 0;
var playerO_score = 0;

const squares = document.querySelectorAll(".square");
const reset = document.querySelector(".reset");
const xScore = document.querySelector(".score-x p");
const oScore = document.querySelector(".score-o p");
const pro = document.querySelector(".nav-items li a");

pro.style.color = "black";

squares.forEach((square, index, squares) => {

    square.addEventListener("mouseup", (event) => {
        if (event.which == 1) {
            square.textContent = "X";
        } else if (event.which == 2) {
            square.textContent = "O";
        }

        index;
        if ((squares[0].textContent === "X" && squares[1].textContent === "X" && squares[2].textContent === "X") || (squares[0].textContent === "X" && squares[3].textContent === "X" && squares[6].textContent === "X") || (squares[0].textContent === "X" && squares[4].textContent === "X" && squares[8].textContent === "X") || (squares[6].textContent === "X" && squares[7].textContent === "X" && squares[8].textContent === "X") || (squares[2].textContent === "X" && squares[5].textContent === "X" && squares[8].textContent === "X") || (squares[3].textContent === "X" && squares[4].textContent === "X" && squares[5].textContent === "X") || (squares[1].textContent === "X" && squares[4].textContent === "X" && squares[7].textContent === "X")) {
            playerX_score++;
            xScore.textContent = playerX_score;
        } else if ((squares[0].textContent === "O" && squares[1].textContent === "O" && squares[2].textContent === "O") || (squares[0].textContent === "O" && squares[3].textContent === "O" && squares[6].textContent === "O") || (squares[0].textContent === "O" && squares[4].textContent === "O" && squares[8].textContent === "O") || (squares[6].textContent === "O" && squares[7].textContent === "O" && squares[8].textContent === "O") || (squares[2].textContent === "O" && squares[5].textContent === "O" && squares[8].textContent === "O") || (squares[3].textContent === "O" && squares[4].textContent === "O" && squares[5].textContent === "O") || (squares[1].textContent === "O" && squares[4].textContent === "O" && squares[7].textContent === "O")) {
            playerO_score++;
            oScore.textContent = playerO_score;
        }
    });

    reset.addEventListener("click", () => {
        square.textContent = "";
    });
});



