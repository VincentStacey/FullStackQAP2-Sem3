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
        num1: getRandomNumber(1,25),
        num2: getRandomNumber(1,25),
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
            if (num2 === 0) {
                return false; 
            }
            correctAnswer = num1 / num2;
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

let leaderboard = [];
 
function updateLeaderboard(playerName, streak) {
    const playerId = leaderboard.findIndex(player => player.name === playerName);
    
    if (playerId >= 0) {
        leaderboard[playerId].streak = Math.max(leaderboard[playerId].streak, streak); 
    } else {
        leaderboard.push({ name: playerName, streak });
    }
    leaderboard.sort((a, b) => b.streak - a.streak);
}


function getLeaderboard() {
    return leaderboard;
}

module.exports = {
    getQuestion,
    getRandomNumber,
    isCorrectAnswer,
    updateLeaderboard,
    getLeaderboard,
    MathOperators,
}