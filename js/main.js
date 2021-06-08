const blocksNumber = 200;
const container = document.querySelector('.container');

for (let i = 1; i < blocksNumber; i++) {
  const blocks = document.createElement('div');

  blocks.classList.add('block');
  container.appendChild(blocks);
}

function generate() {
  document.addEventListener('mousemove', parallax);

  anime({
    targets: '.block',
    translateX: function() {
      return anime.random(-1000, 1000);
    },
    translateY: function() {
      return anime.random(-800, 800);
    },
    scale: function() {
      return anime.random(1, 5);
    }
  })
}

function parallax(e) {
  this.querySelectorAll('.container').forEach(element => {
    const speed = 2;

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    element.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
