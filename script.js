const equationGen = document.getElementById('equationGenerator');
const equationAdd = document.getElementById('equationAdd');


const generator = document.getElementById('generatebtn');

const equationGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10 * 1);
    equationGen.textContent = randomNumber;
}

const randomNumberAdd = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 4);
    equationAdd.textContent = randomNumber;
}


generatebtn.addEventListener('click', equationGenerator)
generatebtn.addEventListener('click', randomNumberAdd)


equationGenerator;
randomNumberAdd;