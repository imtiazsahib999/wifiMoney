
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducer/loginReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const rootReducer = combineReducers({
    auth: authReducer, 
})

const initialState = {}
//  voice nh a rhi
export default () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return store
}
