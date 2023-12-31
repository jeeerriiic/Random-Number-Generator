const number = document.getElementById('number1');
const number2 = document.getElementById('num');
const generator = document.getElementById('generatebtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10 * 3);
    number.textContent = randomNumber;
}

const randomNumberGenerator2 = () => {
    const randomNumber = Math.floor(Math.random() * 10000 / 2);
    number2.textContent = randomNumber;
}


generatebtn.addEventListener('click', randomNumberGenerator)
generatebtn.addEventListener('click', randomNumberGenerator2)


randomNumberGenerator;
randomNumberGenerator2;