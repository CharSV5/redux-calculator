import * as sumActions from '../actions/sum-action';

const newInput1 = 3;
const newInput2 = 4;

describe('Sum actions', () => {
    it('should add input1 and input2 together ', () => {
        const sum = 7
        const expectedAction = {
            type: sumActions.ADD,
            newAnswer: sum
        }
        expect(sumActions.add(newInput1, newInput2)).toEqual(expectedAction)
    })
})