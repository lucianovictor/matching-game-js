import './styles.css';

const ArrowDown = (currentPlayer = 1) => {
  return `
    <img class="arrow-down"
        data-currentPlayer="${currentPlayer}"
      src="images/IconArrowDown.png"
      alt="icon de uma seta para baixo">
  `;
}

export default ArrowDown