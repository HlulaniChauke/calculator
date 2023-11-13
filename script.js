const calSreen = document.querySelector('p');
const numerals = document.querySelector('.keypad')
let arryDisplayNum = [];

function screenDisplay(num){
    arryDisplayNum.push(num);
    let displayNum = arryDisplayNum;
    if (displayNum.length > 0){
        displayNum = displayNum.slice(0,14);
    }
    calSreen.innerHTML = displayNum.join('');
}

function displayNumerals(value){
    console.log(value);
    screenDisplay(value);
}

numerals.addEventListener('click', (e)=> {
    let value = e.target.innerHTML;
    displayNumerals(value);
}
)