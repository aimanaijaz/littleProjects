const generatePasswordButton = document.getElementById("generate");

generatePasswordButton.addEventListener('click', () => {
    const finalPassword = document.getElementById("finalPassword");
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const finalPasswordValue = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    console.log(finalPasswordValue);
    finalPassword.value = finalPasswordValue;
});

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const characters = "!@#$%^&*()".split("");

function randomUpperCaseLetter() {
    return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
}

function randomLowerCaseLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword(length, upper, lower, nums, syms) {
    let generators = [];
    if (upper) generators.push(randomUpperCaseLetter);
    if (lower) generators.push(randomLowerCaseLetter);
    if (nums) generators.push(randomNumber);
    if (syms) generators.push(randomCharacter);

    if (generators.length === 0) return "Select at least one option";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomFunc = generators[Math.floor(Math.random() * generators.length)];
        password += randomFunc();
    }

    return password;
}
