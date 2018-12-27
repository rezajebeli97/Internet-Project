var turn = 1
var maxScore = 100;
var lastDiceNumber1 = 0;
var lastDiceNumber2 = 0;

function newGame(){
	document.getElementById("dice1").style.display = "none";
	document.getElementById("dice2").style.display = "none";
	maxScore = parseInt(document.getElementById("inp").value);
	if (!maxScore) {
		alert("you didn't specify maxScore so default is 100!");
		maxScore = 100;
	}
	document.getElementById("player1").innerHTML = "PLAYER 0";
	document.getElementById("player2").innerHTML = "PLAYER 1";
	document.getElementById("player1").style.color = "black";
	document.getElementById("player2").style.color = "black";
	document.getElementById("hold").disabled = false;
	document.getElementById("rolldice").disabled = false;
	document.getElementById("playerScore1").innerHTML = "0";
	document.getElementById("playerScore2").innerHTML = "0";
	document.getElementById("currentScore1").innerHTML = "0";
	document.getElementById("currentScore2").innerHTML = "0";
	lastDiceNumber1 = 0;
	lastDiceNumber2 = 0;
	turn = 1;
	changeTurn();
}

function rollDice(){
	console.log(lastDiceNumber1 , lastDiceNumber2);
	document.getElementById("dice1").style.display = "";
	document.getElementById("dice2").style.display = "";
	var dice1 = document.getElementById("dice1");
	var dice2 = document.getElementById("dice2");
	var diceNumber1 = Math.floor(Math.random() * 6) + 1;
	var diceNumber2 = Math.floor(Math.random() * 6) + 1;
	var source1 = "img/dice-" + diceNumber1 + ".png";
	var source2 = "img/dice-" + diceNumber2 + ".png";
	dice1.src = source1;
	dice2.src = source2;
	var totallDiceNumber = diceNumber1 + diceNumber2;
	if ( (diceNumber1 == 6 && lastDiceNumber1 == 6) || (diceNumber1 == 6 && lastDiceNumber2 == 6) || (diceNumber2 == 6 && lastDiceNumber1 == 6) || (diceNumber2 == 6 && lastDiceNumber2 == 6) ) {
		console.log(6);
		if (turn===1) {
			document.getElementById("playerScore1").innerHTML = 0;
			document.getElementById("currentScore1").innerHTML = 0;
			turn = 0;
		}
		else{
			document.getElementById("playerScore2").innerHTML = 0;
			document.getElementById("currentScore2").innerHTML = 0;
			turn = 1;
		}
		changeTurn();
	}
	else if (diceNumber1 == 1 || diceNumber2 == 1) {
		console.log(1)
		if (turn===1) {
			document.getElementById("currentScore1").innerHTML = 0;
			turn = 0;
		}
		else{
			document.getElementById("currentScore2").innerHTML = 0;
			turn = 1;
		}
		changeTurn();
	}
	else{
		if (turn===1) {
			document.getElementById("currentScore1").innerHTML = parseInt(document.getElementById("currentScore1").innerHTML) + totallDiceNumber;
		}
		else{
			document.getElementById("currentScore2").innerHTML = parseInt(document.getElementById("currentScore2").innerHTML) + totallDiceNumber;
		}
		lastDiceNumber1 = diceNumber1;
		lastDiceNumber2 = diceNumber2;
	}
}

function hold(){
	var score;
	if (turn == 1) {
		score = parseInt(document.getElementById("currentScore1").innerHTML) + parseInt(document.getElementById("playerScore1").innerHTML);
		document.getElementById("playerScore1").innerHTML = score;
		document.getElementById("currentScore1").innerHTML = 0;
		turn = 0;
		changeTurn();
		if (score >= maxScore) {
			document.getElementById("player1").style.color = "red";
			document.getElementById("player1").innerHTML = "WINNER!";
			document.getElementById("hold").disabled = true;
			document.getElementById("rolldice").disabled = true;
			document.getElementById("tik2").hidden = "hidden";
		}
	} 
	else {
		score = parseInt(document.getElementById("currentScore2").innerHTML) + parseInt(document.getElementById("playerScore2").innerHTML);
		document.getElementById("playerScore2").innerHTML = score;
		document.getElementById("currentScore2").innerHTML = 0;
		turn = 1;
		changeTurn();
		if (score >= maxScore) {
			document.getElementById("player2").style.color = "red";
			document.getElementById("player2").innerHTML = "WINNER!";
			document.getElementById("hold").disabled = true;
			document.getElementById("rolldice").disabled = true;
			document.getElementById("tik1").hidden = "hidden";
		}
	}
	
}

function changeTurn(){
	lastDiceNumber1 = 0;
	lastDiceNumber2 = 0;
	if (turn == 1) {
		document.getElementById("tik1").hidden = "";
		document.getElementById("tik2").hidden = "hidden";
		document.getElementById("main").style = "background : url('img/game1.jpg') no-repeat center center fixed;";
	}
	else{
		document.getElementById("tik1").hidden = "hidden";
		document.getElementById("tik2").hidden = "";
		document.getElementById("main").style = "background : url('img/game2.jpg') no-repeat center center fixed;";
	}
}