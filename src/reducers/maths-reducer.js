import { MATHS_IS_PLUS } from '../actions/maths-action';

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
        default:
        return state;  
    }
}