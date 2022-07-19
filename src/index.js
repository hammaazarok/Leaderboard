import './index.css';
import addScore from './add-score.js';

const newPromise = new Promise((Resolve, Reject) => {
  const scores = [{
    name: 'hamma',
    score: '79',
  }, {
    name: 'mohamed',
    score: '70',
  }];

  if (scores.length > 0) {
    Resolve(scores);
  } else {
    Reject(new Error('no Data'));
  }
});

newPromise.then(
  (value) => {
    value.forEach((score, id) => {
      addScore(score.name, score.score, id);
    });
  },
  (error) => { throw error; },
);