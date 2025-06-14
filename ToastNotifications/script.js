const showNotification = document.querySelector(".showNotification");
const notificationsContainer=document.querySelector(".notificationsContainer");

const messages =  [
    {text:"New Email",color:"blue"},
    {text:"Error Message",color:"red"},
    {text:"Process Completed",color:"green"},
    {text:"Purple Message",color:"purple"}
]

function getRandomMessage(){
    const randomIndex = Math.floor(Math.random()*messages.length);
    return messages[randomIndex];
}

showNotification.addEventListener("click",()=>{
    const notification = document.createElement("div");
    const message = getRandomMessage();
    notification.textContent=message.text;
    notification.style.color= message.color;
    notification.classList.add("notification");
    notificationsContainer.appendChild(notification);
    setTimeout(()=>notification.style.display="none",4000)
})
