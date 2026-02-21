document.title = "Mini-Demo| Cami's Corner";

const welcomeMsg = document.getElementById("myH1");

const useranme = document.getElementById ('myusername");

let username; 
document.querySelector('button').onclick = function(){
  username = document.querySelector('input').value; 
  document.querySelector('H1').textContent = 'Hi there ${username}!'
}
