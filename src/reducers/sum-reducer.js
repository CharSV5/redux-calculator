import { ADD, RECORD_INPUT_1, RECORD_INPUT_2, MATHS_IS_PLUS, CALCULATE_ANSWER } from '../actions/sum-action'

export const initialState = {
    inputValue1: '',
    inputValue2: '',
    answer: 0,
    currentMaths: ''
}

export const sumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
        return [
            ...state,
            {
                answer: action.newAnswer
            }
        ]
        case RECORD_INPUT_1:
        return [
            ...state, 
            {
                inputValue1: action.newInput1
                
            }
        ]
        case RECORD_INPUT_2:
        return [
            ...state, 
            {
                inputValue2: action.newInput2
            }
        ]
        case MATHS_IS_PLUS:
        return [
            ...state,
            {
                currentMaths: action.plus
            }
        ]
        case CALCULATE_ANSWER:
        
        return [
            ...state,
           
            {
                answer: action.newInput1 + action.newInput2
            }
        ]
        default:
      

        return state;
    }
}

