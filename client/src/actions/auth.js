import { AUTH } from "../constants/actionType";
import * as api from '../api/index.js';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        debugger;
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/home');
    }
    catch (err) {
        alert('Invalid Credentials');
        console.log(err.message);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        if (data) {
            alert('Registration successful. Login to activate your account.')
            history.go(0);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}