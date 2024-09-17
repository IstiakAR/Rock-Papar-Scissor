document.addEventListener("DOMContentLoaded", () => {
  const playerchoiceimage = document.getElementById("playerchoiceimage");
  const botchoiceimage = document.getElementById("botchoiceimage");
  const roundResult = document.getElementById("roundResult");
  const choices = ["rock", "paper", "scissor"];
  const score = document.getElementById("score");
  score.innerText = "0:0"
  let playeronecount = 0;
  let playertwocount = 0;
  let finished = false;
  /*
    const player1choiceimage = document.getElementById("player1choiceimage");
    const player2choiceimage = document.getElementById("player2choiceimage");
    let player1MoveIndex = -1;
    let player2MoveIndex = -1; 
  */

  function randGen() {
    return Math.abs(Math.floor(Math.random() * 1000000000000000) % 3);
  }

  function pvbwinner(playerMove, botMove) {
    let result;
    if (playerMove === botMove) {
      result = "It's a tie!";
    } else if ((playerMove === 0 && botMove === 2) ||
      (playerMove === 1 && botMove === 0) ||
      (playerMove === 2 && botMove === 1)) {
      result = "Player wins!";
      playeronecount++;
    } else {
      playertwocount++;
      result = "Computer wins!";
    }
    return result;
  }
  function resultpvb(move) {
    playerchoiceimage.innerText = "";
    const playermove = document.createElement("div");
    playermove.setAttribute("id", "playermove");
    const playerMoveIndex = choices.indexOf(move);
    let playerimg = document.createElement("img");
    playerimg.src = `images/${move}.jpg`;
    playermove.appendChild(playerimg);
    playerchoiceimage.appendChild(playermove);

    botchoiceimage.innerText = "";
    const botmove = document.createElement("div");
    botmove.setAttribute("id", "botmove");
    const botMoveIndex = randGen();
    const botMoveName = choices[botMoveIndex];
    let botimg = document.createElement("img");
    botimg.src = `images/${botMoveName}.jpg`;
    botimg.style.transform = 'rotateY(180deg)';
    botmove.appendChild(botimg);
    botchoiceimage.appendChild(botmove);

    roundResult.innerText = pvbwinner(playerMoveIndex, botMoveIndex);
    score.innerText = playeronecount + ':' + playertwocount;
    if (playeronecount == 5) {
      roundResult.innerText = "You WON  ";
      finished = true;
    }
    else if (playertwocount == 5) {
      roundResult.innerText = "Computer WON 󰇸 ";
      finished = true;
    }
  }
  document.getElementById("ROCK").addEventListener("click", () => {
    if (finished) {
      finished = false;
      roundResult.innerText = "";
      playeronecount = 0;
      playertwocount = 0;
      resultpvb("rock");
    }
    else
      resultpvb("rock");
  })
  document.getElementById("PAPER").addEventListener("click", () => {
    if (finished) {
      finished = false;
      roundResult.innerText = "";
      playeronecount = 0;
      playertwocount = 0;
      resultpvb("paper");
    }
    else
      resultpvb("paper");
  })
  document.getElementById("SCISSOR").addEventListener("click", () => {
    if (finished) {
      finished = false;
      roundResult.innerText = "";
      playeronecount = 0;
      playertwocount = 0;
      resultpvb("scissor");
    }
    else
      resultpvb("scissor");
  })
  /*
  function pvpwinner(player1Move, player2Move) {
    player1choiceimage.innerText = "";
    const player1move = document.createElement("div");
    player1move.setAttribute("id", "player1move");
    let player1img = document.createElement("img");
    player1img.src = `images/${choices[player1MoveIndex]}.jpg`;
    player1move.appendChild(player1img);
    player1choiceimage.appendChild(player1move);

    player2choiceimage.innerText = "";
    const player2move = document.createElement("div");
    player2move.setAttribute("id", "player2move");
    let player2img = document.createElement("img");
    player2img.src = `images/${choices[player2MoveIndex]}.jpg`;
    player2move.appendChild(player2img);
    player2choiceimage.appendChild(player2move);

    let result;
    if (player1Move === player2Move) {
      result = "It's a tie!";
    } else if ((player1Move === 0 && player2Move === 2) ||
      (player1Move === 1 && player2Move === 0) ||
      (player1Move === 2 && player2Move === 1)) {
      result = "Player1 wins!";
      playeronecount++;
    } else {
      playertwocount++;
      result = "Player2 wins!";
    }
    return result;
  }
   document.addEventListener('keydown', (event) => {
    if (event.key === 'A' || event.key === 'a') {
      player1MoveIndex = 0; console.log('Player 1 chose Rock');
    } else if (event.key === 'S' || event.key === 's') {
      player1MoveIndex = 1;
    } else if (event.key === 'D' || event.key === 'd') {
      player1MoveIndex = 2;
    } else if (event.key === 'ArrowLeft') {
      player2MoveIndex = 0; console.log('Player 2 chose Rock');
    } else if (event.key === 'ArrowDown') {
      player2MoveIndex = 1;
    } else if (event.key === 'ArrowRight') {
      player2MoveIndex = 2;
    }
    if (player1MoveIndex !== -1 && player2MoveIndex !== -1) {
      roundResult.innerText = pvpwinner(player1MoveIndex, player2MoveIndex);
      score.innerText = playeronecount + ':' + playertwocount;
      if (playeronecount == 5) {
        roundResult.innerText = "Player 1 WON ";
        finished = true;
      }
      else if (playertwocount == 5) {
        roundResult.innerText = "PLayer 2 WON ";
        finished = true;
      }
      player1MoveIndex = -1;
      player2MoveIndex = -1;
    }
  });
  */
});
