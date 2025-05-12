const jokeArea = document.querySelector(".JokeArea");

const anotherJokeButton = document.querySelector(".AnotherJokeButton");

getJoke();

anotherJokeButton.addEventListener('click',()=>{
    getJoke();   
})

//Using async await
async function getJoke(){
    const config = {
        method:"GET",
        headers:{
            "Accept":"application/json"
        }
    }
    const res = await fetch("https://icanhazdadjoke.com/", config)
    const data = await res.json();

    jokeArea.innerText = data.joke;
    
}

//Using .then()
// function getJoke(){
//     const config = {
//         method:"GET",
//         headers:{
//             "Accept":"application/json"
//         }
//     }
//     fetch("https://icanhazdadjoke.com/", config)
//     .then(res=>res.json())
//     .then(data=>{
//         jokeArea.innerText = data.joke;
//     })
// }




