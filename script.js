let username; 
document.querySelector('button').onclick = function(){
  username = document.querySelector('input').value; 
  document.querySelector('H1').textContent = 'Hi there ${username}!'
}
