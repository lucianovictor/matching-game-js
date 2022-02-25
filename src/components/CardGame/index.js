import './style.css';

const CardGame = (icon = "alurapixel", alt = "logo da alura") =>  { 
  return `
    <article class="card-game">
    <img src="images/${icon}.png" alt="${alt} ">
    </article> 
  `;
}

export default CardGame;  