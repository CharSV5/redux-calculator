import { combineReducers, createStore } from 'redux';
import { initialSumState, sumReducer } from './reducers/sum-reducer';
import { initialMathsState, mathsReducer } from './reducers/maths-reducer';
import { initialAnswerState, answerReducer } from './reducers/answer-reducer';

const rootReducers = combineReducers({
    sumReducer,
    mathsReducer,
    answerReducer
})

const initialState = {
    initialSumState,
    initialMathsState,
    initialAnswerState
}

export default createStore(rootReducers, initialState, window.devToolsExtension && window.devToolsExtension());

