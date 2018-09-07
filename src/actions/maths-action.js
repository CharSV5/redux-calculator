export const MATHS_IS_PLUS = 'MATHS_IS_PLUS';
export const MATHS_IS_MINUS = 'MATHS_IS_MINUS';

export const Maths_Is_Plus = (plus) => {
    return {
        type: MATHS_IS_PLUS,
        plus
    }
}

export const Maths_Is_Minus = (minus) => {
    return {
        type: MATHS_IS_MINUS,
        minus
    }
}