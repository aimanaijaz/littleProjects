const audioSources = document.querySelectorAll('.audioSource');
const audioBoxes = document.querySelectorAll('.audioBox');


audioBoxes.forEach((box,i) =>{
    box.addEventListener('click',()=>{
        stopAll();
        audioSources[i].play();
    })
})

function stopAll(){
    audioBoxes.forEach((box,i) =>{
        audioSources[i].pause();
        audioSources[i].currentTime=0;
    })
}


