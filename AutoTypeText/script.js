const text = "We love programming";

const target = document.querySelector(".text");
const step = document.querySelector("#step");

let speed = 100;
const pause = 500;

let stepperValue=1;

step.addEventListener('input',()=>{
    stepperValue = step.value;
    speed = (10-stepperValue)*10;

})

let i=0;

function typeText(){
    if(i<=text.length){
        target.textContent=text.slice(0,i++);
        setTimeout(typeText,speed)
    }
    else{
        setTimeout(()=>{
            i=0;
            typeText();
        },pause)
    }
}


typeText();