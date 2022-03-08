import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';

import './style.css'

const ScoreBoard = () => {
  return `
    <header class="score-board">
    ${PlayerName('Player1')}
    ${PlayerScore(1)}
    ${VsPlayer()}
    ${PlayerScore()}
    ${PlayerName('Player2')}
      </header>
  `;
}

export default ScoreBoard;