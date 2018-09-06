import * as sumActions from '../actions/sum-action';

const newInput1 = 3;
const newInput2 = 4;

describe('Sum actions', () => {
    describe('Calculate_Answer', () => {
        it('should add input1 and input2 together ', () => {
            const sum = newInput1 + newInput2
            const expectedAction = {
                type: sumActions.CALCULATE_ANSWER,
                newAnswer: sum
            }
            expect(sumActions.Calculate_Answer(newInput1, newInput2)).toEqual(expectedAction)
        })
    })
    describe('record_Input_1', ()=> {
        it('should record the first input', () => {
            const expectedAction = {
                type: sumActions.RECORD_INPUT_1,
                newInput1: newInput1
            }
            expect(sumActions.Record_Input_1(newInput1)).toEqual(expectedAction)
        })
    })
    describe('record_Input_2', ()=> {
        it('should record the second input', () => {
            const expectedAction = {
                type: sumActions.RECORD_INPUT_2,
                newInput2: newInput2
            }
            expect(sumActions.Record_Input_2(newInput2)).toEqual(expectedAction)
        })
    })
})