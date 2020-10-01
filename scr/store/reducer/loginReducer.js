import * as allType from './../action/actionType';

const initailState = {
    signInLoading: false,
    isSignInError: false,
    signInError: '',
    isLogin: '0'
}

export default (state = initailState, action) => {
    console.log("action", action.type);
    switch (action.type) {
        case allType.SIGNIN_LOADING:
            return {
                ...state,
                signInLoading: true
            }
        case allType.STOP_SIGNIN_LOADING:
            return {
                ...state,
                signInLoading: false
            }
        case allType.SIGNIN_SUCCESS:
            return {
                ...state,
                signInLoading: false,
                isLogin: '1'
            }
        case allType.SIGNIN_ERROR:
            return {
                ...state,
                isSignInError: true,
                signInError: action.err
            }
        default:
            return state
    }


}