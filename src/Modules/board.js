const ScoreBoard = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OsIdfjVZGF6rZmZWBTi6/scores/')
    .then((res) => res.json())
    .then((data) => {
      const scores = data.result.sort((a, b) => a.score - b.score);
      const board = document.querySelector('.board');
      let boardHtml = '';
      scores.forEach((player) => {
        boardHtml += ` <tr>
          <td>${player.user}: ${player.score}</td>
      </tr>`;
      });
      board.innerHTML = boardHtml;
    });
};
export default ScoreBoard;