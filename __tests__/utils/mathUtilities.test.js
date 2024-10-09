const { isCorrectAnswer, getQuestion, MathOperators } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    test("Tests that getQuestion returns a proper math question", () => {
        const question = getQuestion();
        expect(Number.isNaN(question?.numbers)).toBe(false); 
        expect(Object.values(MathOperators)).toContain(question.mathQuestion); 
    });
});

describe("Tests for isCorrectAnswer", () => {
    test("Tests that isCorrectAnswer can verify correct answer for multiplication", () => {
        const question = { num1: 5, num2: 3, mathQuestion: MathOperators.Multiplication };
        const answer = 5 * 3;
        expect(isCorrectAnswer(question, answer)).toBe(true);
    });

    test("Tests that isCorrectAnswer can verify correct answer for Division", () => {
        const question = { num1: 4, num2: 2, mathQuestion: MathOperators.Division };
        const answer = 4 / 2;
        expect(isCorrectAnswer(question, answer)).toBe(true);
    });

    test("Tests that isCorrectAnswer can verify correct answer for Addition", () => {
        const question = { num1: 8, num2: 4, mathQuestion: MathOperators.Addition };
        const answer = 8 + 4;
        expect(isCorrectAnswer(question, answer)).toBe(true);
    });

    test("Tests that isCorrectAnswer can verify correct answer for Subtraction", () => {
        const question = { num1: 9, num2: 2, mathQuestion: MathOperators.Subtraction };
        const answer = 9 - 2;
        expect(isCorrectAnswer(question, answer)).toBe(true);
    });

    test("Tests that isCorrectAnswer returns false for an incorrect answer", () => {
        const question = { num1: 8, num2: 4, mathQuestion: MathOperators.Addition };
        const answer = 8 + 3; 
        expect(isCorrectAnswer(question, answer)).toBe(false);
    });
});
