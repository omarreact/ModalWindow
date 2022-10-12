'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

let name = 'Faruk Khan';

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

[closeModal, overlay].forEach(items => {
  items.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});

document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key == 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

let marks = '7';
marks = marks + '0';
const results = Number(marks) + 3;
// print(float(results));
console.log(results);
