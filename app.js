let p1score = document.getElementById("score1");
let p2score = document.getElementById("score2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let tossButton = document.getElementById("toss");
let currentPlayer = "";
let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

function chose() {
    let p1 = prompt("Select Heads or Tails: ").toLowerCase();
    let p = document.getElementById("p");
    let para2 = document.getElementById("p2");

    if (p1 === "heads") {
        p.innerText = "Player 1: Heads";
        para2.innerText = "Player 2: Tails";
        currentPlayer = "player1";
    } else if (p1 === "tails") {
        p.innerText = "Player 1: Tails";
        para2.innerText = "Player 2: Heads";
        currentPlayer = "player2";
    } else {
        alert("Invalid choice. Please select either 'heads' or 'tails'.");
        chose();
    }
}

chose();

function toss() {
    tossButton.setAttribute("disabled", true);
    let randNum = Math.random();
    if (randNum < 0.5) {
        alert("Player 1 wins the toss");
        currentPlayer = "player1";
    } else {
        alert("Player 2 wins the toss");
        currentPlayer = "player2";
    }
    start();
}

function restartGame() {
    btn1.setAttribute("disabled", true);
    btn2.setAttribute("disabled", true);
    tossButton.removeAttribute("disabled");
    status1.innerText = ""; 
    status2.innerText = ""; 
    p1score.innerText = ""; 
    p2score.innerText = ""; 

    
    if (currentPlayer === "player1") {
        btn1.removeAttribute("disabled");
    } else {
        btn2.removeAttribute("disabled");
    }
    tossButton.setAttribute("disabled", true)
}

function start() {
    btn1.setAttribute("disabled", true);
    btn2.setAttribute("disabled", true);
    status1.innerText = ""; 
    status2.innerText = ""; 

   
    if (currentPlayer === "player1") {
        btn1.removeAttribute("disabled");
    } else {
        btn2.removeAttribute("disabled");
    }

   
}

function turn(player) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    if (player === "player1") {
        p1score.innerText = "Dice 1: " + dice1 + " | Dice 2: " + dice2;
        if (dice1 === 6 && dice2 === 6) {
            status1.innerText = "Player 1 wins!";
            alert("Player 1 wins the round!");
            btn1.removeAttribute("disabled"); 
            btn2.setAttribute("disabled", true); 
            tossButton.removeAttribute("disabled"); 
        } else {
            btn1.setAttribute("disabled", true); 
            btn2.removeAttribute("disabled"); 
            currentPlayer = "player2"; 
        }
    } else if (player === "player2") {
        p2score.innerText = "Dice 1: " + dice1 + " | Dice 2: " + dice2;
        if (dice1 === 6 && dice2 === 6) {
            status2.innerText = "Player 2 wins!";
            alert("Player 2 wins the round!");
            btn2.removeAttribute("disabled"); 
            btn1.setAttribute("disabled", true); 
            tossButton.removeAttribute("disabled"); 
        } else {
            btn2.setAttribute("disabled", true); 
            btn1.removeAttribute("disabled"); 
            currentPlayer = "player1"; 
        }
    }
}



