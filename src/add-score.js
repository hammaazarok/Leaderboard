const addScore = (name, score, id) => {
  const ScoresContainer = document.getElementById('leaders-container');

  const bookHTML = document.createElement('div');
  bookHTML.classList.add('leader-item');
  if (id % 2 === 0) {
    bookHTML.classList.add('gray');
  }
  bookHTML.innerHTML = `
                <p class="name">${name}:</p>
                <p class="score">${score}</p>
            `;
  ScoresContainer.appendChild(bookHTML);
};

export default addScore;
