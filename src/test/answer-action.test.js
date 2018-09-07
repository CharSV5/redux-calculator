import * as answerActions from '../actions/answer-action';

const newInput1 = 3;
const newInput2 = 4;

describe('Answer actions', () => {
    describe('Calculate_Answer', () => {
        it('should add input1 and input2 together ', () => {
            const sum = newInput1 + newInput2
            const expectedAction = {
                type: answerActions.CALCULATE_ANSWER,
                newAnswer: sum
            }
            expect(answerActions.Calculate_Answer(newInput1, newInput2)).toEqual(expectedAction)
        })
    })
    describe('Calculate_Minus', () => {
        it('should subtract input2 from input1', () => {
            const total = newInput1 - newInput2
            const expectedAction = {
                type: answerActions.CALCULATE_MINUS,
                newAnswer: total
            }
            expect(answerActions.Calculate_Minus(newInput1, newInput2)).toEqual(expectedAction)
        })
    })
    describe('Calculate_Divide', () => {
        it('should divide input1 by input2', () => {
            const total = newInput1 / newInput2
            const expectedAction = {
                type: answerActions.CALCULATE_DIVIDE,
                newAnswer: total
            }
            expect(answerActions.Calculate_Divide(newInput1, newInput2)).toEqual(expectedAction)
        })
    })
})