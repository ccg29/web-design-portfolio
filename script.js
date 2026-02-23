const readMoreBttn = document.querySelectorAll('.more-text-bttn');
const text = document.querySelectorAll('.text'); 

readMoreBttns.forEach((readMoreBttn, index) => {
readMoreBttn.addEventListener('click'), (e)=>{
  if (texts[index]){texts[index].classList.toggle('show');
  }
  if(readMoreBttn.innerText === 'Read-More'){
    readMoreBttn.innerText = 'Read Less';
  }else{
    readMoreBttn.innerText = 'Read More';
  }
}})
