let navBar = document.querySelector(".content");
let menuBar = document.getElementById("menubar");


menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}