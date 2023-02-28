'use strict'

const square = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');
const blocks = square.querySelectorAll('.block');
const blockNumbers = square.querySelectorAll('.block-number');

resetBtn.addEventListener('click', () => {
  blockNumbers.forEach((block, index) => {
    block.textContent = +index + 1;
  })
})

const swapBlocks = (a, b) => {
  const first = a.querySelector('.block-number');
  const second = b.querySelector('.block-number');
  [first.textContent, second.textContent] = [second.textContent, first.textContent];
}

const canMove = (index, direction) => {
  switch (direction) {
    case 'top':
      return [index - 5 >= 0, index - 5];
    case 'bottom':
      return [index + 5 < blocks.length - 1, index + 5];
    case 'left':
      return [index - 1 >= 0, index - 1];
    case 'right':
      return [index + 1 < blocks.length - 1, index + 1];
    default:
      return [false, -1];
  }
}

square.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('arrow')) {
    e.preventDefault();
    const direction = e.target.parentElement.classList[1];
    let index;

    blocks.forEach((block, i) => {
      if (block === e.target.closest('.block')) {
        index = i;
        return;
      }
    });

    const goto = canMove(index, direction);

    if (goto[0]) {
      swapBlocks(blocks[index], blocks[goto[1]]);
    }
  }
})
