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
})