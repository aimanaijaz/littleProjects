const searchBox = document.getElementById("search");
const usersBox = document.getElementById("users");

let usersData = []

async function getUsers(){
    const response= await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    usersData = data.results;
    displayUsers(usersData);
    console.log(usersData)
}

getUsers();

function displayUsers(users){
    usersBox.innerHTML="";
    users.forEach(user=>{
        const userCard = document.createElement("div");
        const {first,last} = user.name;
        const {city,country} = user.location;
        const {large} =user.picture;
        userCard.innerHTML=`<div class="userCard">
        <div class="image">
          <img src=${large} alt="" class="src">
        </div>
        <div class="text">
          <div class="name">${first} ${last}</div>
          <div class="location">${city}, ${country}</div>
        </div>
      </div>`
        usersBox.appendChild(userCard);
    }

    )
}

searchBox.addEventListener("input",(e)=>{
    const searchInput = e.target.value;
    const filteredUsers= usersData.filter(user=>{
        const {first,last} = user.name;
        const {city,country} = user.location;
        const searchData = `${first} ${last} ${city} ${country}`.toLowerCase();
        return searchData.includes(searchInput)
    })
    displayUsers(filteredUsers);
})