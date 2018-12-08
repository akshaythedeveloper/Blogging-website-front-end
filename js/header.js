//Code for Signup modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mySignupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Code for Signin modal */

//Get the modal
var modaltwo = document.getElementById("myModalSecond");

//Get the button that opens the modal
var btnSecond = document.getElementById("mySigninBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button open the modal
btnSecond.onclick = function() {
  modaltwo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaltwo.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaltwo) {
    modaltwo.style.display = "none";
  }
};
