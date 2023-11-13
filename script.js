const calSreen = document.querySelector('p');
const numerals = document.querySelector('.keypad')
let arryDisplayNum = [];
let currentResult = 0;
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
        currentResult = 0;
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
function simpleMath(){
    let a = currentResult;
    let b = Number(arryDisplayNum.join(''));
     //add
    if (theOperand === "+"){
        currentResult = a + b;
    }
    //minus
    if (theOperand === "-"){
        currentResult = a - b;
    }
    //divide
    if (theOperand === "÷"){
        currentResult = a / b;
    }
    //multiply
    if (theOperand === "*"){
        currentResult = a * b;
    }

}

numerals.addEventListener('click', (e)=> {
    let value = e.target.innerHTML;
    console.log(theOperand);
    if(e.target.className === 'numerals'){
        displayNumerals(value);
    }
    if(e.target.className === 'functions'){
        functions(value);
    }

    if(e.target.className === 'operands'){
        if (arryDisplayNum.length === 0 && currentResult === 0 ){
            calSreen.innerHTML = 0;
        }
        if (arryDisplayNum.length != 0 && currentResult === 0){
            currentResult = Number(arryDisplayNum.join(''));
            theOperand = value;
            calSreen.innerHTML = currentResult;
            arryDisplayNum = [];
        }
        if(arryDisplayNum.length != 0 && currentResult != 0 && theOperand != ""){
            simpleMath();
            calSreen.innerHTML = currentResult;
            arryDisplayNum = [];
            if (value === "="){
                theOperand = "";
                currentResult = 0;
            }else{theOperand = value;}
            
        }
    }

}
)