import './index.css';
import loadScores from './refresh-scores.js';
import { submitScore } from './add-score.js';

loadScores();

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  loadScores();
});

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  const userElem = document.querySelector('#user');
  const scoreElem = document.querySelector('#score');
  const user = userElem.value;
  const score = scoreElem.value;

  const error = document.querySelector('.error');
  if (user === '' || score === '') {
    error.innerHTML = 'Error : please enter value in both name and score';
  } else {
    submitScore(user, score);
    userElem.value = '';
    scoreElem.value = '';
  }
});