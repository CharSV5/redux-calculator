import { ADD, RECORD_INPUT_1, RECORD_INPUT_2 } from '../actions/sum-action'

export const initialState = {
    inputValue1: '',
    inputValue2: '',
    answer: 0
}

const sumReducer = (state = initialState, action) => {
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
    }
}

export default sumReducer;