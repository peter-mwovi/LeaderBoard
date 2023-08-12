export default function ScoreBoard(Scores) {
  const refreshBtn = document.getElementById('refresh');
  const board = document.querySelector('.board');

  refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const scor = JSON.parse(localStorage.getItem('Scores') || []);
    let boardHtml = '';
    if (scor) {
      Scores = scor;
      Scores.forEach((player) => {
        boardHtml += ` <tr>
        <td>${player.Name}: ${player.Score}</td>
    </tr>`;
      });
      board.innerHTML = boardHtml;
    }
  });
  localStorage.setItem('Scores', JSON.stringify(Scores));
}