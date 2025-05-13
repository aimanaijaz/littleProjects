const entryTextContainer = document.querySelector(".entryTextContainer");
const infoBoxesContainer = document.querySelector(".infoBoxesContainer");
const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const code = document.querySelector(".code");

window.addEventListener('keydown',function(event){
    key.innerText = event.key;
    keyCode.innerText=event.keyCode;
    code.innerText=event.code;
    entryTextContainer.style.display = "none";
    infoBoxesContainer.style.display = "flex";  
})
