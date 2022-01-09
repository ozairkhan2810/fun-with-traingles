const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "equilateral", "equilateral", "isosceles"];

let calculateScore = () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    if(index === correctAnswers.length)
    output.innerText = `Your Score: ${score}`;
    else
    output.innerText = "Please answer all questions";
}

submitAnswerButton.addEventListener("click", calculateScore);