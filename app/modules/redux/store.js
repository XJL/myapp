/**
 * Created by jian on 16-12-21.
 */
import { createStore as _createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createLogger from 'redux-logger';

import authReducer from './modules/auth';

const reducer = combineReducers({
    auth: authReducer
});

const middleWares = [
    thunkMiddleware,
];

if (__DEV__) {
    middleWares.unshift(createLogger());
}

const finalCreateStore = applyMiddleware(
    ...middleWares
)(_createStore);

const store = finalCreateStore(reducer);
export default store;
