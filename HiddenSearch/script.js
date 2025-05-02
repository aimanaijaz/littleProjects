const searchBox = document.querySelector(".searchBox");
const searchIcon = document.querySelector(".fa-search");

searchIcon.addEventListener('click',()=>{
    searchBox.classList.toggle("active");
})