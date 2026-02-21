let username; 
document.GetElementByID("mySubmit").onclick = function(){
  username = document.getElementByID("myText).value; 
  document.getElementByID("myH1").textContent = 'Hi there ${username}!'
}
