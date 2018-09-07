import { MATHS_IS_PLUS, MATHS_IS_MINUS } from '../actions/maths-action';

export const initialMathsState = {
    currentMaths: ''
}

export const mathsReducer = (state = initialMathsState, action) => {
    switch (action.type) {
        case MATHS_IS_PLUS: {
            return Object.assign({}, state, {
                currentMaths: action.plus
                })
        
        } 

        case MATHS_IS_MINUS: {
            return Object.assign({}, state, {
                currentMaths: action.minus
                })
        
        }
        default:
        return state;  
    }
}