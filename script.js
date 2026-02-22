const readMoreBttn = document.querySelector('.more-text-bttn');
const text = document.querySelector('.text'); 

readMoreBttn.addEventListener('click',(e)=>{
  text.classList.toggle('show');
  if(readMoreBttn.innerText === 'Read-More'){
    readMoreBttn.innerText = 'Read Less';
  }else{
    readMoreBttn.innerText = 'Read More';
  }
})
