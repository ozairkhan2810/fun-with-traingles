const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(base, height) {
    const area =  (base * height)/2;
    return area;
}

function calculateArea() {
    if(sides[0].value.length === 0)
    output.innerText = "Enter base value";
    else if(sides[1].value.length === 0)
    output.innerText = "Enter height value";
    else if(sides[0].value < 0)
    output.innerText = "Enter positive value for base";
    else if(sides[1].value < 0)
    output.innerText = "Enter positive value for height";
    else {
        const area = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
        output.innerText = "The Area of triangle is: "+ area +" cm2";
    }
    
}

areaBtn.addEventListener("click", calculateArea)