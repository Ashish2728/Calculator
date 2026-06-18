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
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (key >= "0" && key <= "9" || key === ".") {
        display.value += key;
    }

    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        display.value += key;
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (key === "Escape") {
        display.value = "";
    }

});