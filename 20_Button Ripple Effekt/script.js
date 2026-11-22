const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX; // asta e distanta din margine(stanga) pana la click
    const y = e.clientY; // asta e diferenta de sus de tot pana la click

    const buttonTop = e.target.offsetTop; // aici reda pozitia butonului
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
