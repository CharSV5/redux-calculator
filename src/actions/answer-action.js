export const CALCULATE_ANSWER = 'CALCULATE_ANSWER';

export const Calculate_Answer = (newInput1, newInput2) => {
    return {
        type: CALCULATE_ANSWER,
        newAnswer: newInput1 + newInput2
    }
}