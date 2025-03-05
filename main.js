document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.getElementsByClassName('box');
  const turnSetup = document.querySelector('.turn');
  const resetButton = document.querySelector('.reset');
    
  let turnIndex = 0;
  let matchEnded = 0;
  let playerPosition1 = [];
  let playerPosition2 = [];
    
  const updateTurn = () => {
    turnSetup.innerHTML = turnIndex === 0 ? 'Turn : X' : 'Turn : O';
  }

  updateTurn();

  const resetMatch = () => {
    playerPosition1 = [];
    playerPosition2 = [];
    matchEnded = 0;
  }

  const winningCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
  ];

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',() => {
      if (matchEnded === 1) {
        setTimeout(() => {
          alert('Match Ended!! Please click on Reset button to start a new match');
        }, 2);
      }
      else if (boxes[i].textContent === '' && turnIndex === 0) {
        boxes[i].textContent = 'X';
        playerPosition1.push(i);
        console.log(playerPosition1);
        turnIndex = 1;
        updateTurn();
        checkWinner();
      } else if (boxes[i].textContent === '' && turnIndex === 1) {
        boxes[i].textContent = 'O';
        playerPosition2.push(i);
        console.log(playerPosition2);
        turnIndex = 0;
        updateTurn();
        checkWinner();
      } else if (boxes[i].textContent !== '') {
        setTimeout(() => {
          alert('This box is already filled');
        },2);
      }
    });
  }

  resetButton.addEventListener('click', () => {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
      }   
      turnIndex = 0;
      resetMatch();
      updateTurn();
    });

  const checkWinner = () => {
    for (let i = 0; i < winningCombo.length; i++) {
      if (playerPosition1.includes(winningCombo[i][0]) && playerPosition1.includes(winningCombo[i][1]) && playerPosition1.includes(winningCombo[i][2])) {
        matchEnded = 1;
        setTimeout(() => {
          alert('Player 1 wins!!');
        }, 2);
        return;
      } else if (playerPosition2.includes(winningCombo[i][0]) && playerPosition2.includes(winningCombo[i][1]) && playerPosition2.includes(winningCombo[i][2])) {
        matchEnded = 1;
        setTimeout(() => {
          alert('Player 2 wins!!');
        }, 2);
        return;
      } else if (playerPosition1.length + playerPosition2.length === 9 && matchEnded === 0) {
        setTimeout(() => {
          alert('Match Drawn!!');
        }, 2);
        matchEnded = 1;
      }
    }
  }

  updateTurn();
});


