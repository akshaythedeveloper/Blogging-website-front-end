var likeCounter = 1;

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

function makeBlogTitleBodyEditable(){
    document.getElementById("blogTitleNew").contentEditable = "true";
    document.getElementById("blogBody").contentEditable = "true";
}

function revertEditSettings(){
    document.getElementById("blogTitleNew").contentEditable = "false";
    document.getElementById("blogBody").contentEditable = "false";
}

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

function displayCommentSection(){
    var commentFrmTextArea = document.getElementById("commentText").value;
    if (!commentFrmTextArea){
        var x = document.getElementById("displaycomments");
        x.style.display = "none";
    }
}
