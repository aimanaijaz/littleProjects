const imageLinks=[
'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
]
console.log(imageLinks.length)

const slide = document.querySelector(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const blurBg = document.querySelector(".body-blur-bg");

let currentIndex = 0;

next.addEventListener('click', () => {
    currentIndex = currentIndex + 1;
    if (currentIndex >= imageLinks.length) {
        currentIndex = 0;
    }
    slide.style.backgroundImage = `url(${imageLinks[currentIndex]})`;
    blurBg.style.backgroundImage = `url(${imageLinks[currentIndex]})`;

});


prev.addEventListener('click', () => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = imageLinks.length - 1;
    }
    slide.style.backgroundImage = `url(${imageLinks[currentIndex]})`;
    blurBg.style.backgroundImage = `url(${imageLinks[currentIndex]})`;

});