
export const RECORD_INPUT_1 = 'RECORD_INPUT_1';
export const RECORD_INPUT_2 = 'RECORD_INPUT_2';
export const MATHS_IS_PLUS = 'MATHS_IS_PLUS';
export const CALCULATE_ANSWER = 'CALCULATE_ANSWER';


export const Record_Input_1 = (newInput1) => {
    return {
        type: RECORD_INPUT_1,
        newInput1
    }
}

export const Record_Input_2 = (newInput2) => {
    return {
        type: RECORD_INPUT_2,
        newInput2
    }
}

export const Maths_Is_Plus = (plus) => {
    return {
        type: MATHS_IS_PLUS,
        plus
    }
}

export const Calculate_Answer = (newInput1, newInput2) => {
    return {
        type: CALCULATE_ANSWER,
        newAnswer: newInput1 + newInput2
    }
}