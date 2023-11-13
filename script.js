const calSreen = document.querySelector('p');
const numerals = document.querySelector('.keypad')
let arryDisplayNum = [];

function screenDisplay(value){
    if (value === "." && arryDisplayNum.includes(".")){
        arryDisplayNum = arryDisplayNum;
    }else {
        arryDisplayNum.push(value);
    }
   
    let displayNum = arryDisplayNum;
    if (displayNum.length > 0){
        displayNum = displayNum.slice(0,14);
    }
    calSreen.innerHTML = displayNum.join('');
}

function displayNumerals(value){
    console.log(value);
    if(arryDisplayNum.length === 0 && value === "0"){
        calSreen.innerHTML = 0;
    } else{
        screenDisplay(value);
    }   
}

numerals.addEventListener('click', (e)=> {
    let value = e.target.innerHTML;
    if(e.target.className === 'numerals'){
        displayNumerals(value);
    }
        
}
)