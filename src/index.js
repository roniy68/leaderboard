import './styles.css';
import { scoreList, updateList } from './modules/scorelist.js';

const scoreBoard = document.getElementById('scoreboard');

updateList(scoreList, scoreBoard);