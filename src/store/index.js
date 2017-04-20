import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/authReducer';

const logger = createLogger()
const middlerware = compose(applyMiddleware(thunk, logger))

export const rootReducer = combineReducers({
    AuthReducer
})

export let store = createStore(
    rootReducer,
    middlerware
);