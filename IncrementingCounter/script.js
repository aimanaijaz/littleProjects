
const TFOLLOWERS = 12000;
const YFOLLOWERS = 5000;
const FFOLLOWERS = 7500;
const INTERVAL = 200;

const twfollowers = document.querySelector('.twfollowers');
const ytfollowers = document.querySelector('.ytfollowers');
const fbfollowers = document.querySelector('.fbfollowers');

let twcounter = 0;
let ytcounter = 0;
let fbcounter = 0;

function timer() {
    if (twcounter < TFOLLOWERS) {
        const IncrementStep = TFOLLOWERS/INTERVAL;
        twcounter = twcounter + IncrementStep;
        twfollowers.innerHTML = twcounter;
    }
    if (ytcounter < YFOLLOWERS) {
        const IncrementStep = YFOLLOWERS/INTERVAL;
        ytcounter = ytcounter + IncrementStep;
        ytfollowers.innerHTML = ytcounter;
    }
    if (fbcounter < FFOLLOWERS) {
        const IncrementStep = FFOLLOWERS/INTERVAL;
        fbcounter = fbcounter + IncrementStep;
        fbfollowers.innerHTML = fbcounter;
    }
}

setInterval(timer, 0.1);

timer();
