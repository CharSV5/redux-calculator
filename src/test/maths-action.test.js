import * as mathsActions from '../actions/maths-action';

describe('Maths actions', () => {
    describe('Maths_Is', () => {
        it('should acknowledge that it is adding', () => {
            const expectedAction = {
                type: mathsActions.MATHS_IS,
                plus: '+'
            }
            expect(mathsActions.Maths_Is('+')).toEqual(expectedAction)
        })
    })
})