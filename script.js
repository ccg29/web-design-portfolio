const readMoreBttn = document.querySelectorAll (' .more-text-bttn');

readMoreBttn.forEach(button=>{
  button.addEventListener('click',() =>{
    const parentContainer = button.closest(' .portfolioItem');

    if (parentContainer){
      const targetText = parentContainer.querySelector('.text');
      if (targetText){
        targetText.classList.toggle('show');
      }}
    if (button.innerText === 'Read Summary') {
      button.innerText = 'Hide Summmary';}
    else { button.innerText = 'Read Summary';}
  });
});

  
