const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
// Using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch('https://icanhazdadjoke.com', config);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (err) {
    jokeEl.textContent = 'Nu am putut încărca gluma 😕';
  }
}
