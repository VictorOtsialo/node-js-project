let form = document.getElementById("form");
let input = document.getElementById("input");
let msg =document.getElementById("msg");
let post = document.getElementById("post");

//Add an Event Listener to the Submit Button
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
});

//Form validation Function
let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML="You can not add a blank post";
    }
    else{
        msg.innerHTML=""
        acceptData();
    }
}

//Accepting and Storing Data

let data = {};

let acceptData = ()=>{
    data["text"] = input.value;
    createPost();
}

let createPost = ()=>{
    post.innerHTML += 
    `
    <div>
     <p>${data.text}</p>
        <div class="options">
        <span onClick="editPost(this)" class="material-icons">edit</span>
        <span onClick="deletePost(this)" class="material-icons">delete</span>
        </div>
    </div>
    `
    input.value="";

}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}