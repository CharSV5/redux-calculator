import { RECORD_INPUT_1, RECORD_INPUT_2, MATHS_IS_PLUS, CALCULATE_ANSWER } from '../actions/sum-action'

export const initialState = {
    inputValue1: '',
    inputValue2: '',
    answer: 0,
    currentMaths: ''
}

export const sumReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECORD_INPUT_1: {
        return Object.assign({}, state, {
            inputValue1: action.newInput1
        });
        }

        case RECORD_INPUT_2: {
        return Object.assign({}, state, {
            inputValue2: action.newInput2
        });
        }

        case MATHS_IS_PLUS: {
        return Object.assign({}, state, {
            currentMaths: action.plus
        })
        }

        case CALCULATE_ANSWER: {
        return Object.assign({}, state, {
            answer: action.newAnswer
        })
        }
        default:
        return state;
    }
}

