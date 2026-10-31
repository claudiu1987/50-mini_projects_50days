const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('') // in ein Array verwandeln
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`,
    ) // durchmappen um spanarray zu erzeugen
    .join(''); // in string umwandeln
});
