const number = document.getElementById('number');
const generator = document.getElementById('generatebtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 1000000 / 10 + 1);
    number.textContent = randomNumber;
}

generatebtn.addEventListener('click', randomNumberGenerator)


randomNumberGenerator;