
var likeCounter = 1; /* Declaration of a global variable used in the function changeLikeBtnTxt() */

/* 
Function: changeEditBtnTxt(id)
Purpose: Helps in making Edit button toggle to Save and vive versa along with making title
and blog body editable when the edit button is clicked.
*/

function changeEditBtnTxt(id){
    var btnDOM = document.getElementById(id);
    if (btnDOM.innerHTML==="Edit"){
        btnDOM.innerHTML = "Save";
        makeBlogTitleBodyEditable();
    }else if(btnDOM.innerHTML = "Save"){
        var newTitleText = document.getElementById("blogTitleNew").innerHTML;
        var newBlogText = document.getElementById("blogBody").innerHTML;
        revertEditSettings();
        document.getElementById("blogTitleNew").innerHTML = newTitleText;
        document.getElementById("blogBody").innerHTML = newBlogText;
        btnDOM.innerHTML = "Edit";
    }
}

/* 
Function: makeBlogTitleBodyEditable()
Purpose: Sets the content editable for blog title and blog body.
*/

function makeBlogTitleBodyEditable(){
    document.getElementById("blogTitleNew").contentEditable = "true";
    document.getElementById("blogBody").contentEditable = "true";
}

/* 
Function: revertEditSettings()
Purpose: Sets the content non-editable for blog title and blog body.
*/

function revertEditSettings(){
    document.getElementById("blogTitleNew").contentEditable = "false";
    document.getElementById("blogBody").contentEditable = "false";
}

/* 
Function: changeLikeBtnTxt(id)
Purpose: Makes the like button toggle when clicked to display Liked! as well as shows how many people have 
liked the post via a dynamic text.
*/

function changeLikeBtnTxt(id){
    var btnDOM = document.getElementById(id);
    if (btnDOM.innerHTML==="Like"){
        btnDOM.innerHTML = "Liked!";
        document.getElementById("likeTxt").innerHTML = likeCounter + " person have liked this!";
    }else if(btnDOM.innerHTML === "Liked!"){
        likeCounter = likeCounter + 1;
        document.getElementById("likeTxt").innerHTML = likeCounter + " people have liked this!";        
    }
}

/* 
Function: addComment()
Purpose: Helps to add the comments when user enters the comment in the comment box and clicks the Comment 
button. It also ensures that the latest comment is displayed at the TOP of the comment section as well as
in the desired style
*/

function addComment(){
    var x = document.getElementById("displaycomments");
        x.style.display = "block";
    var commentFrmTextArea = document.getElementById("commentText").value;
    console.log(commentFrmTextArea);
    if (commentFrmTextArea !== ""){
        var template = '<div style="border: 2px solid grey; background-color:white; padding:15px ">'+commentFrmTextArea+'</div>';
        var comments = document.getElementById("listOfComments").innerHTML;
        var totalComments = template + comments;
        document.getElementById("listOfComments").innerHTML = totalComments;        
    }
    document.getElementById("commentText").value = "";    
}

/* 
Function: displayCommentSection()
Purpose: Helps to hide the comment section style when the page gets loaded and turns on the style for the
comment section only when user enters the first comment. This function is called in the body element
in post.html via a 'onload' event
*/

function displayCommentSection(){
    var commentFrmTextArea = document.getElementById("commentText").value;
    if (!commentFrmTextArea){
        var x = document.getElementById("displaycomments");
        x.style.display = "none";
    }
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

