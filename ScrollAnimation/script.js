// AOS.init();

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",checkboxes)

checkboxes();

function checkboxes(){
    const trigger = window.innerHeight/5 * 4;

   for(let i=0;i<boxes.length;i++){
    const top = boxes[i].getBoundingClientRect().top;
    if(top<trigger){
        boxes[i].classList.add('show')
    }
    else{
        boxes[i].classList.remove('show')
    }
   }
}