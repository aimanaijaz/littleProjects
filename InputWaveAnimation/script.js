const inputfields = document.querySelectorAll("input");

const labels = document.querySelectorAll("label");

// for(let i=0;i<inputfields.length;i++){
// inputfields[i].addEventListener('focus', ()=>{
//    labels[i].classList.add("moveup");
// })
// }

inputfields.forEach((input,i)=>{
    input.addEventListener('focus',() =>{
        labels[i].classList.add("moveup");
    })
})
