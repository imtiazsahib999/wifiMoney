import * as allType from './actionType';
import Firebase from './../../component/firebase';

export const loginUser = (email, password) => {
    // console.log("test", email, password);
    return (dispatch) => {
        if (email === '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (password === '') {
            alert("Please Enter Your Password");
            return;
        }
        
        else {
            dispatch({
                type: allType.SIGNIN_LOADING
            })
            Firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() =>{
                    dispatch({
                        type: allType.SIGNIN_SUCCESS
                    })
                    dispatch({
                        type: allType.STOP_SIGNIN_LOADING
                    })
                })
                .catch(err => {
                    dispatch({
                        type: allType.STOP_SIGNIN_LOADING
                    })
                    dispatch({
                        type: allType.SIGNIN_ERROR,
                        err
                    })
                })
        }

    }
}