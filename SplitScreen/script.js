const left = document.querySelector(".left");
const right= document.querySelector(".right");

left.addEventListener("mouseenter",()=>{
    left.style.width = '75%';
    right.style.width = '25%';
})

left.addEventListener("mouseleave",()=>{
    left.style.width = '25%';
    right.style.width = '75%';
})

right.addEventListener("mouseenter",()=>{
    left.style.width = '25%';
    right.style.width = '75%';
})

right.addEventListener("mouseleave",()=>{
    left.style.width = '75%';
    right.style.width = '25%';
})




