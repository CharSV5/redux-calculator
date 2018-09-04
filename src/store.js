import { combineReducers, createStore } from 'redux';
import { initialState,  sumReducer } from './reducers/sum-reducer';


const rootReducers = combineReducers({
    sumReducer
})

export default createStore(rootReducers, initialState, window.devToolsExtension && window.devToolsExtension());

