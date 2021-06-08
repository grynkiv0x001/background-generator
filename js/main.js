const blocksNumber = 200;
const parallaxSpeed = 5;

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
  const x = (window.innerWidth - e.pageX * parallaxSpeed) / 100;
  const y = (window.innerHeight - e.pageY * parallaxSpeed) / 100;

  container.style.transform = `translateX(${x}px) translateY(${y}px)`;
}
