import { combineReducers } from 'redux';
import userReducer from "../Containers/User/reducer"
import mapReducer from "../Containers/Map"

const rootReducer = combineReducers({
    userReducer,
    mapReducer,
});
export default rootReducer;