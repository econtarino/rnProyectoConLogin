import {EMAIL_CHANGE,PASSWORD_CHANGE} from './types'
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
};
export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGE,
        payload: password
    }
}