import CardGame from '../CardGame';

import './style.css';

const CardFrontBack = () => {
  return`
    <article class="card-front-back"> 
    <div class="card -front" >
      ${CardGame()}
    </div> 
    <div class="card -back">
      ${CardGame("javascript", "logo fa JavaScript")}
    </div>
    </article>
  `;
}

export default CardFrontBack;