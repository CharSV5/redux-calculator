export const CALCULATE_ANSWER = 'CALCULATE_ANSWER';
export const CALCULATE_MINUS = 'CALCULATE_MINUS';

export const Calculate_Answer = (newInput1, newInput2) => {
    return {
        type: CALCULATE_ANSWER,
        newAnswer: newInput1 + newInput2
    }
}

export const Calculate_Minus = (newInput1, newInput2) => {
    return {
        type: CALCULATE_MINUS,
        newAnswer: newInput1 - newInput2
    }
}