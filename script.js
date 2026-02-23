const readMoreBttn = document.querySelectorAll ('.more-text-bttn');

readMoreBttn.forEach(button=>{
  button.addEventListener('click',() =>{
    const parentContainer = button.closest('.portfolioItem');

    if (parentContainer){
      const targetText = parentContainer.querySelector('.text');
      if (targetText){
        targetText.classList.toggle('show');
      }}
    if (button.innerText === 'Read More') {
      button.innerText = 'Read Less';}
    else { button.innerText = 'Read More';}
  });
});

  
