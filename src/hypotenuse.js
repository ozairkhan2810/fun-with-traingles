const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

let calculateSumOfSquares = (a, b) => a*a + b*b;

let calculateHypotenuse = () => {
    if(sides[0].value.length === 0)
    output.innerText = "Enter value a";
    else if(sides[1].value.length === 0)
    output.innerText = "Enter value b";
    else if(sides[0].value < 0)
    output.innerText = "Enter positive value for a";
    else if(sides[1].value < 0)
    output.innerText = "Enter positive value for b";
    else{
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        output.innerText = `The length of hypotenuse is: ${lengthOfHypotenuse.toFixed(2)}`;
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)