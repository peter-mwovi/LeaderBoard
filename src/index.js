import './style.css';
import getInput from './Modules/input';
import ScoreBoard from './Modules/board';
import createGame from './Modules/createGame';

createGame();
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value.trim();
  if (name === '' || score === '' || Number.isNaN(score)) {
    return;
  }
  getInput();
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

document.getElementById('refresh').addEventListener('click', (e) => {
  e.preventDefault();
  ScoreBoard();
});
