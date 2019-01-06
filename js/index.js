/* Code for Create Post modal */

//Get the modal
var createPost = document.getElementById("myCreatePostModal");

//Get the button that opens the modal
var secondBtn = document.getElementById("myCreatePostBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button open the modal
secondBtn.onclick = function() {
  createPost.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  createPost.style.display = "none";
};

// Get the All post button that opens the bloglist.html file
var allPostBtn = document.getElementById("myAllPostsBtn");

// When the user clicks on "All posts" button , opens the bloglist.html file
allPostBtn.onclick = function() {
  //window.open("../html/bloglist.html", "_self");
  window.location.href = 'html/bloglist.html';
};
