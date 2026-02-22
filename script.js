const readMoreBttn = document.queryselector('.more-text-bttn');
const text = document.queryselector('.text'); 

readMoreBttn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBttn.innerText === 'Read-More'){
    readMoreBttn.innerText = 'Read Less';
  }else{
    readMoreBttn.innerText = 'Read More';
  }
}
