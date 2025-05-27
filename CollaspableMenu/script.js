
const button = document.querySelector("#button");
const menuContainer = document.querySelector(".menuContainer")

button.addEventListener('click',()=>{
    menuContainer.classList.toggle("closed");
    if(button.classList.contains("fa-xmark")){
        button.classList.remove("fa-xmark")
        button.classList.add("fa-bars");
    }
    else{
        button.classList.remove("fa-bars")
        button.classList.add("fa-xmark");
    }

})
