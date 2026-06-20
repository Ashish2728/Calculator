const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value;

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.value = result;
    }

    catch(error){
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if("0123456789".includes(key)){
        append(key);
    }

    else if(
        ["+","-","*","/",".","(",")"]
        .includes(key)
    ){
        append(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "="){
        calculate();
    }

    else if(key === "Backspace"){
        backspace();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});
    
