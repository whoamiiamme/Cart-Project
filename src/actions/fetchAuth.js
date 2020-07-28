import { SIGN_IN,
    SIGN_OUT } from './types';

export const onLogin = (userId) => {

    return{
        type: SIGN_IN,
        payload: userId
    }
} 

export const onLogout = () => {
    return{
        type: SIGN_OUT
    }
}