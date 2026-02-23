const readMoreBttn = document.querySelectorAll('.more-text-bttn');
const text = document.querySelectorAll('.text');

readMoreBttn.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    if (text[index]) {
      text[index].classList.toggle('show');
    }
    if (button.innerText === 'Read-More') {
      button.innerText = 'Read Less';
    } else {
      button.innerText = 'Read More';
    }
  });
});
