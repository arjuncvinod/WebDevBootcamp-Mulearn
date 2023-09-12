let num1
let num2
function updateno(){
    num1=Number(document.getElementById("num1-el").value)
    num2=Number(document.getElementById("num2-el").value)
    console.log("changed");
}


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
    event.preventDefault();
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
     event.preventDefault();
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
     event.preventDefault();
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
     event.preventDefault();
}
