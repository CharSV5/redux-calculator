import { RECORD_INPUT_1, RECORD_INPUT_2 } from '../actions/sum-action';
import { CALCULATE_ANSWER } from '../actions/answer-action';

export const initialSumState = {
    inputValue1: '',
    inputValue2: ''
   
}

export const sumReducer = (state = initialSumState, action) => {
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

        default:
        return state;
    }
}

