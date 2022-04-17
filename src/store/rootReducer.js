import {combineReducers} from "redux";
import {photosReducer} from "./photosReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    photos: photosReducer,
    app: appReducer
})
