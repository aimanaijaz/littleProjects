const API_URL = "https://api.github.com/users/"

const search = document.getElementById('search')

async function getUser(username) {
   try {
    let response = await fetch(API_URL + username);

    if (!response.ok) {
      // GitHub returns 404 for unknown users
      createErrorCard("User not found");
      return;
    }

    let data = await response.json();
    console.log(data);

    createUserCard(data);
    getRepos(username);

  } catch (error) {
    createErrorCard("Something went wrong");
    console.error(error);
  }
}

async function getRepos(username) {
  let response = await fetch(API_URL+username+"/repos?sort=created");
  let data = await response.json();
  addReposToCard(data)
  console.log(data);
}


function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
        <img src="${user.avatar_url}" alt="" class="src">
        <div class="info">
          <div class="name">${user.name}</div>
          <div class="bio">${user.bio}</div>
          <div class="followers">
            <span>${user.followers} Followers</span> <span>${user.following} Following</span> <span>${user.public_repos} Repos</span></div>
             <div class="repos" id="repos">
        </div>
        </div>
    `
    main.innerHTML = cardHTML
    
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 3)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}


search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const user = search.value.trim();

    if (user) {
      getUser(user);
      search.value = '';
    }
  }
});

