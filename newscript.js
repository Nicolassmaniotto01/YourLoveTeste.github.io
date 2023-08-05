let characterLove = 50; // Inicialmente, o amor do personagem X é 50%

function makeChoice(option) {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert("Please choose a gender before making a choice!");
    return;
  }

  // Ajuste o valor do amor do personagem de acordo com a escolha
  if (option === 'option1') {
    characterLove += 10;
  } else if (option === 'option2') {
    characterLove -= 10;
  }

  // Limite o valor do amor do personagem entre 0 e 100
  characterLove = Math.min(Math.max(characterLove, 0), 100);

  // Atualize a exibição do medidor de amor
  updateHeartMeter();

  // Verifique o resultado do jogo
  checkGameResult();
}

function updateHeartMeter() {
  const heartFill = document.querySelector('.heart-fill');
  heartFill.style.width = `${characterLove}%`;
}

function checkGameResult() {
  if (characterLove <= 0) {
    alert("Game Over - Character X's heart is empty!");
  } else if (characterLove >= 100) {
    alert("Congratulations! Character X's heart is full!");
  }
}
