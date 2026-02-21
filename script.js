let username; 
document.querySelector("mySubmit").onclick = function(){
  username = document.querySelector("myText").value; 
  document.querySelector("myH1").textContent = 'Hi there ${username}!'
}


