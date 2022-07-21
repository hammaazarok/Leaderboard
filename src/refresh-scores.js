import { addScore } from './add-score.js';

const loadScores = () => {
  const ScoresContainer = document.getElementById('leaders-container');
  ScoresContainer.innerHTML = '';
  const getScoresData = async () => {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KJxUTySzzZA6BH0fd9pM/scores/');
    const data = await request.json();
    return data.result;
  };

  getScoresData().then(
    (value) => {
      value.forEach((score, id) => {
        addScore(score.user, score.score, id);
      });
    },
    (error) => {
      throw error;
    },
  );
};

export default loadScores;
