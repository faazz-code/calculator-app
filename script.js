let currentValue=""

function clickHandle(num) {
    currentValue = currentValue + num;
    display()
}

function clearDisplay(){
    currentValue=""
    display()
}

function calculate(){
    currentValue=eval(currentValue).toString()
    display()
}

function display(){
    document.getElementById("screen").value = currentValue
}

