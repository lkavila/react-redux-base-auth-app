import { combineReducers } from 'redux';
import logInReducer from "../Containers/User/LogIn"
import SignUpReducer from "../Containers/User/SignUp"
import mapReducer from "../Containers/Map"

const rootReducer = combineReducers({
    logInReducer,
    SignUpReducer,
    mapReducer,
});
export default rootReducer;