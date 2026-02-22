const readMoreBttn = document.getElementByID('more-text-bttn');
const text = document.getElementByID('text'); 

readMoreBttn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBttn.innerText === 'Read-More'{
    readMoreBttn.innerText = 'Read Less';
  }else{
    readMoreBttn.innerText = 'Read More';
  }
}
