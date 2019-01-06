//function to navigate to post.html onclick of ellipsis image
function imageClick() 
{
	window.location.href = '../html/post.html';
}


//function to close SignIn popup
function closeSignInModal(reference)
{
	var modalSignIn = document.getElementById(reference);
	modalSignIn.style.display = "none";
	
}

//function to close SignUp popup
function closeSignUpModal(reference)
{
	var modalSignIn = document.getElementById(reference);
	modalSignIn.style.display = "none";
}

//function to open SignIn Modal
function openSignInModal(reference)
{
	var modalSignIn = document.getElementById(reference);
	modalSignIn.style.display = "block";
}

//function to open Signup Modal
function openSignUpModal(reference)
{
	var modalSignUp = document.getElementById(reference);
	modalSignUp.style.display = "block";
}

//Get the modal
var modaltwo = document.getElementById("myModalSecond");
// Get the modal
var modal = document.getElementById("myModal");

//Getting Signup hyperlink element
var signupHyperlink = document.getElementById("signUpNavigation");

//function to open SignupModal on click of SignUp link on SignIn Modal
signupHyperlink.onclick = function() {
  modaltwo.style.display = "none";
  modal.style.display = "block";
};