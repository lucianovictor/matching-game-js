import CardGame from '../CardGame';

const CardFrontBack = () => {
  return`
    <article class=""card-front-back"> 
      ${CardGame()}
      ${CardGame("javascript", "logo fa JavaScript")}
    </article>
  `;
}

export default CardFrontBack;