const container=document.querySelector(".container");
const colors= ["#FF6B6B","#6BCB77","#4D96FF","#FFD93D","#845EC2","#00C9A7","#FF9671","#FFC75F","#0081CF","#B39CD0"]


const NUMBER_OF_SQUARES = 648;


for(let i=0;i<NUMBER_OF_SQUARES;i++){
    const box = document.createElement('div')
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover",()=>setColor(box))
    box.addEventListener("mouseout",()=>removeColor(box))
}

function setColor(element){
    element.style.backgroundColor = getRandomColor();
}

function removeColor(element){
    element.style.backgroundColor = "#1D1D1D";
}


function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)] 
}












