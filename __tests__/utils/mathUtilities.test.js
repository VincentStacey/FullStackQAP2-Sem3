const { isCorrectAnswer, getQuestion, MathOperators } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    test("Tests that getQuestion returns a proper math question", () => {
        const question = getQuestion();
        expect(Number.isNaN(question?.numbers)).toBe(false); 
        expect(Object.values(MathOperators)).toContain(question.mathQuestion); 
    });
});

describe("Tests for isCorrectAnswer", () => {
    
});
