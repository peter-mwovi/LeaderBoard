const createGame = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },

    body: JSON.stringify({ name: 'asmarka' }),
  });
};

export default createGame;