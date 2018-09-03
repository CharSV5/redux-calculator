export const ADD = 'ADD';
export const RECORD_INPUT_1 = 'RECORD_INPUT_1';
export const RECORD_INPUT_2 = 'RECORD_INPUT_2';

export const add = (newInput1, newInput2) => {
    return {
        type: ADD,
        newAnswer: newInput1 + newInput2
    }
}

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