const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

let calculateSumOfAngles = (angle1, angle2, angle3) => angle1 + angle2 +angle3;

let isTriangle = () => {
    if(inputs[0].value.length === 0)
    outputEl.innerText = "Enter angle1";
    else if(inputs[1].value.length === 0)
    outputEl.innerText = "Enter angle2";
    else if(inputs[2].value.length === 0)
    outputEl.innerText = "Enter angle3";
    else if(inputs[0].value < 0)
    outputEl.innerText = "Enter positive value for angle1";
    else if(inputs[1].value < 0)
    outputEl.innerText = "Enter positive value for angle2";
    else if(inputs[2].value < 0)
    outputEl.innerText = "Enter positive value for angle3";
    else{
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(Number(inputs[0].value) === 0 || Number(inputs[1].value) === 0 || Number(inputs[2].value) === 0)
        outputEl.innerText = "The angles don't form a triangle";
        else if(sumOfAngles === 180)
        outputEl.innerText = "The angles form a Triangle!";
        else
        outputEl.innerText = "The angles don't form a triangle";
        }
}

isTriangleBtn.addEventListener("click", isTriangle);