export default function getInput(Scores) {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const score = document.querySelector('#score').value.trim();
    if (name === '' || score === '' || Number.isNaN(score)) {
      return;
    }
    const scores = {
      Name: name,
      Score: +score,
    };
    Scores.push(scores);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';

    localStorage.setItem('Scores', JSON.stringify(Scores));
  });
}
