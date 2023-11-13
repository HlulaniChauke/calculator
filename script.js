const calSreen = document.querySelector('p');
const numerals = document.querySelector('.keypad')
let arryDisplayNum = [];
let CurrentResult = 0;
let theOperand = "";

function screenDisplay(){
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
        if (value === "." && arryDisplayNum.includes(".")){
            arryDisplayNum = arryDisplayNum;
        }else {
            arryDisplayNum.push(value);
        }
        screenDisplay();
    }   
}

function functions(value){
    if (value === "C"){
        //clear everything
        arryDisplayNum = [];
        CurrentResult = 0;
        theOperand = "";
        calSreen.innerHTML = 0;
    }

    if (value === '±'){
        //negate the arrDisplayNum
        if (arryDisplayNum.includes("-")){
            arryDisplayNum.shift();
        }else {arryDisplayNum.unshift("-");}
        screenDisplay();
    }

    if (value === "%"){
        //divide displayed number by 100
        let num = Number(arryDisplayNum.join(''));
        num = num/100;
        arryDisplayNum = [...num.toString()];
        console.log(arryDisplayNum);
        screenDisplay();
    }
    
}

numerals.addEventListener('click', (e)=> {
    let value = e.target.innerHTML;
    if(e.target.className === 'numerals'){
        displayNumerals(value);
    }
    if(e.target.className === 'functions'){
        functions(value);
    }

}
)