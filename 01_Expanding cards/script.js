const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeClass();
    panel.classList.add('active');
  });
});

const removeClass = function () {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
