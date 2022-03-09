import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';

import './style.css'

const ScoreBoard = () => {
  return `
    <header class="score-board">
    ${PlayerName('Player1')}
    ${PlayerScore(2)}
    ${VsPlayer()}
    ${PlayerScore(3)}
    ${PlayerName('Player2')}
      </header>
  `;
}

export default ScoreBoard;