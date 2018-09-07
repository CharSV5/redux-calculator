import { CALCULATE_ANSWER, CALCULATE_MINUS } from '../actions/answer-action';

export const initialAnswerState = {
    answer: 0
}

export const answerReducer = (state = initialAnswerState, action) => {
    switch (action.type) {
        case CALCULATE_ANSWER: {
            return Object.assign({}, state, {
                answer: action.newAnswer
                });
        }
        case CALCULATE_MINUS: {
            return Object.assign({}, state, {
                answer: action.newAnswer
                });
        }
        default:
        return state;
    }
}