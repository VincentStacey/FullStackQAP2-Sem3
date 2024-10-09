/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */

const MathOperators = {
    Multiplication: "x",
    Division: "/",
    Subtraction: "-",
    Addition: "+",
};


function getQuestion() {
    const mathOperators = Object.values(MathOperators);
    return {
        numbers: getRandomNumber(1,25),
        mathQuestion: mathOperators[getRandomNumber(0, mathOperators.length -1)]
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
    const { num1, num2, mathQuestion } = question;
    let correctAnswer;

    switch (mathQuestion) {
        case MathOperators.Multiplication:
            correctAnswer = num1 * num2;
            break;
        case MathOperators.Division:
            correctAnswer = num1 / num2;
            if(num2 === 0) {
                return false;
            }
            break;
        case MathOperators.Subtraction:
            correctAnswer = num1 - num2;
            break;
        case MathOperators.Addition:
            correctAnswer = num1 + num2;
            break;
        default:
            return false;
    }

    return correctAnswer === answer;
}

module.exports = {
    getQuestion,
    getRandomNumber,
    isCorrectAnswer,
    MathOperators,
}