const bigGlassFull = document.querySelector(".bigGlassFull")
const bigGlassEmpty = document.querySelector(".bigGlassEmpty")
const smallGlasses = document.querySelectorAll(".smallGlass")

smallGlasses.forEach((smallGlass,index)=>{
    smallGlass.addEventListener('click',()=>{ 
            for(let i=0;i<=index;i++)
            {
                smallGlasses[i].classList.add("active")
            }
            
        bigGlassFull.style.height = `${(index + 1) * 40}px`;
        bigGlassFull.style.border="2px solid #0A1172";
        bigGlassFull.innerText = `${12.5*(index+1)} %`
        bigGlassEmpty.innerHTML = `<span>${2-((index+1)*0.25)} L <br> Remaining</span>`
        //bigGlassEmpty.style.height = `${320 - (index + 1) * 40}px`;
    })   
})
