const equationGen = document.getElementById('equationGenerator');
const equationAdd = document.getElementById('equationAdd');
const equationSub = document.getElementById('equationSub');
const equationMultiply = document.getElementById('equationMultiply');
const equationDivision = document.getElementById('equationDivision');

const generator = document.getElementById('generatebtn');

// equation generator
const equationGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10 * 1);
    equationGen.textContent = randomNumber;
}
// equation generator

// add
const randomNumberAdd = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 4);
    equationAdd.textContent = randomNumber;
}
// add

// subtract
const randomNumberSub = () => {
    const randomNumber = Math.floor(Math.random() * 1000 - 6);
    equationSub.textContent = randomNumber;
}
// subtract

// multiply
const randomNumberMultiply = () => {
    const randomNumber = Math.floor(Math.random() * 10000 * 3);
    equationMultiply.textContent = randomNumber;
}
// multiply

// division
const randomNumberDivision = () => {
    const randomNumber = Math.floor(Math.random() * 100000 / 9);
    equationDivision.textContent = randomNumber;
}
// division


generatebtn.addEventListener('click', equationGenerator)
generatebtn.addEventListener('click', randomNumberAdd)
generatebtn.addEventListener('click', randomNumberSub)
generatebtn.addEventListener('click', randomNumberMultiply)
generatebtn.addEventListener('click', randomNumberDivision)


equationGenerator;
randomNumberAdd;
randomNumberSub;
randomNumberMultiply;
randomNumberDivision;