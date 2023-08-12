import './style.css';
import getInput from './Modules/input';
import ScoreBoard from './Modules/board';

const Scores = [];

getInput(Scores);
document.addEventListener('DOMContentLoaded', ScoreBoard(Scores));
