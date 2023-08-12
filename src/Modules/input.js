const getInput = async () => {
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value.trim();
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OsIdfjVZGF6rZmZWBTi6/scores/', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },

    body: JSON.stringify({ score: +score, user: name }),
  });
};
export default getInput;