import loadScores from './refresh-scores.js';

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

const submitScore = (user, score) => {
  if (user || score !== '') {
    const sentToApi = async () => {
      const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KJxUTySzzZA6BH0fd9pM/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user: `${user}`,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return request.status;
    };
    sentToApi().then((res) => res).then(() => {
      loadScores();
    });
  }
};
export { addScore, submitScore };
