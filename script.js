//this has 19 elements.(0-18)
const calValues = document.querySelector(".keypad");
const sreenDisplay = document.querySelector("p");
//make am array to store the entered number in the display;
let arrDisplay = [];
//make variable to store currentNumber;
let currentNumber = 0;
//make a variable to store currentResult;
let currentResult = 0;
//make function to add, multiply, subtract and divide

function simpleMath(currentResult, currentNumber, symbolChosen){
    if (symbolChosen === '/' && currentNumber === 0){ 
        return "Err"
    }
    if(symbolChosen === '/'){
        currentResult = currentResult / currentNumber;
    }

    if(symbolChosen === '*'){
        currentResult = currentResult * currentNumber;
    }

    if(symbolChosen === '-'){
        currentResult = currentResult - currentNumber;
    }

    if(symbolChosen ==='+'){
        currentResult = currentResult + currentNumber;
    }
    
    return currentResult

}

//make clearAllVariable function
function clearAllVariable(){
    return currentResult = 0
}

//make negateNumber function
function negateNumber(currentNumber){
    return currentNumber *= (-1);   
}

//make calPercentage function
function calPercentage(currentNumber){
    return currentNumber/100
}

//make displayOnScreen function
function displayOnScreen (num){
    arrDisplay.push(num);
    let toDisplay = arrDisplay;
    if (toDisplay.length > 9){
        toDisplay = toDisplay.slice(0,9);
    }
    sreenDisplay.innerHTML = toDisplay.join('');

}


calValues.addEventListener('click',(e) => {
    //((e.target.id));
    displayOnScreen(e.target.innerHTML);
});


//make floatingPoint function