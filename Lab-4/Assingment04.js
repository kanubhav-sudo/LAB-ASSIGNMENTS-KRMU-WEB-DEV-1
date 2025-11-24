const quizQuestions = [
    { 
        question: "What is 5 + 7?", 
        answer: "12" 
    },
    { 
        question: "What is the capital of Japan?", 
        options: ["a) Seoul", "b) Beijing", "c) Tokyo", "d) Bangkok"],
        answer: "c" 
    },
    { 
        question: "Which is the largest ocean on Earth?", 
        options: ["a) Atlantic", "b) Indian", "c) Arctic", "d) Pacific"],
        answer: "d" 
    },
    { 
        question: "Which language is used for styling web pages?", 
        options: ["a) HTML", "b) JavaScript", "c) CSS", "d) Python"],
        answer: "c" 
    },
    { 
        question: "Which planet is known as the Red Planet?", 
        options: ["a) Venus", "b) Mars", "c) Jupiter", "d) Saturn"],
        answer: "b" 
    },
    { 
        question: "What is the capital of France?", 
        answer: "Paris" 
    },
    { 
        question: "Which symbol is used for 'strict equality' in JavaScript?", 
        options: ["a) =", "b) ==", "c) ===", "d) !=="],
        answer: "c" 
    },
];
function runQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
        let displayString = currentQuestion.question;
        if (currentQuestion.options) {
            displayString += "\n\n" + currentQuestion.options.join("\n");
            displayString += "\n\n(Type the letter of your answer)";
        }
        const userAnswer = prompt(displayString);

        if (userAnswer && userAnswer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase()) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer was: ${currentQuestion.answer}`);
        }
    }
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}
runQuiz();