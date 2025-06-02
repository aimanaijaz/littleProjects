const timeHere = document.querySelector(".timeHere");
const dateHere = document.querySelector(".dateHere");
const mode = document.querySelector(".mode");
const container = document.querySelector(".container");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

mode.addEventListener('click',()=>{
    container.classList.toggle("dark");
})

function displayAnalogTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours()%12||12;
    console.log(hours)

    const secondDeg = seconds * 6;
    const minuteDeg = (minutes +seconds/60)*6;
    const hourDeg = (hours+minutes/60)*30;

    second.style.transform =`rotate(${secondDeg-90}deg)`
    minute.style.transform =`rotate(${minuteDeg-90}deg)`
    hour.style.transform =`rotate(${hourDeg-90}deg)`
    
}

function displayDate(){
    const date = new Date();
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' }); // e.g., "Friday"
    const monthName = date.toLocaleString('en-US', { month: 'long' });   // e.g., "May"
    const dateString = `${dayOfWeek} ${monthName} ${date.getDate()}`
    dateHere.innerText=dateString;
}

function displayDigitalTime(){
    const time = new Date();
    timeHere.innerText=time.toLocaleTimeString();
}

displayDate();
displayAnalogTime();
displayDigitalTime();

setInterval(displayDigitalTime,1000);
setInterval(displayAnalogTime,1000)


