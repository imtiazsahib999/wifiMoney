import * as allType from './actionType';
import Firebase from './../../component/firebase';

export const loginUser = (email, password, error) => {
    console.log("test", email, password);
    return (dispatch) => {
        // dispatch({
        //     type: allType.SIGNIN_LOADING
        // })
        if (email === '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (password === '') {
            alert("Please Enter Your Password");
            return;
        }
        else {
            Firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() =>{
                    dispatch({
                        type: allType.STOP_SIGNIN_LOADING
                    })
                })
                .catch(err => {
                    dispatch({
                        type: allType.SIGNIN_ERROR,
                        err
                    })
                })
        }

    }
}