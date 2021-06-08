const blocksNumber = 140;
const container = document.querySelector('.container');

for (let i = 1; i < blocksNumber; i++) {
  const blocks = document.createElement('div');

  blocks.classList.add('block');
  container.appendChild(blocks);
}

function generate() {
  anime({
    targets: '.block',
    translateX: function() {
      return anime.random(-800, 800);
    },
    translateY: function() {
      return anime.random(-600, 600);
    },
    scale: function() {
      return anime.random(1, 5);
    }
  })
}
