const navBox = document.querySelector(".navbox");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;

  const nav = document.querySelector("nav");

  if (scrollTop + windowHeight >= fullHeight - 1) {
    navBox.classList.add("reachEnd");
  } else {
    navBox.classList.remove("reachEnd");
  }
});

const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  navBox.classList.toggle("nav-open");
});
