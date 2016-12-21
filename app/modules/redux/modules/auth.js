/**
 * Created by jian on 16-12-21.
 */
import {Platform} from 'react-native';
import { createAction, handleActions } from 'redux-actions';

const client = 'app';
const version = '1.0.0';

export const TEST = 'app/test';

const initialState = null;

export default handleActions({
    [TEST]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
}, initialState);

export const testAction = createAction(TEST);

export function test() {
    return async function(dispatch, getState) {
        try {
            const auth = getState().auth
            let test;
            if(auth){
                test = auth.test + 1;
            }
            else {
                test = 1;
            }
            dispatch(testAction({test}));
        }
        catch (error) {
            throw error;
        }
    }
}