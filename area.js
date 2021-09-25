const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(base, height) {
    const area =  (base * height)/2;
    return area;
}

function calculateArea() {
    const area = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    output.innerText = "The Area of triangle is: "+ area +" cm2";
}

areaBtn.addEventListener("click", calculateArea)