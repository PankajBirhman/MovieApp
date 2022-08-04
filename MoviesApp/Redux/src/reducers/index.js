import { combineReducers } from "redux";
import BollywoodMoviesReducer from "../reducers/Bollywood";
import HollywoodMoviesReducer from "../reducers/Hollywood";

const rootReducer = combineReducers({
    BollywoodReducer: BollywoodMoviesReducer,
    HollywoodReducer: HollywoodMoviesReducer
})

export default rootReducer