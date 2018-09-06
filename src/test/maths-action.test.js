import * as mathsActions from '../actions/maths-action';

describe('Maths actions', () => {
    describe('Maths_Is_Plus', () => {
        it('should acknowledge that it is adding', () => {
            const expectedAction = {
                type: mathsActions.MATHS_IS_PLUS,
                plus: '+'
            }
            expect(mathsActions.Maths_Is_Plus('+')).toEqual(expectedAction)
        })
    })
})