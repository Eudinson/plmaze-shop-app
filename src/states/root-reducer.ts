import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// reducers
// import transposeReducer from "./reducers/transpose-reducers";
// import searchReducer from "./reducers/search-reducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'transpose',
    ],
}

const rootReducer = combineReducers({
    // transpose: transposeReducer,
    // search: searchReducer
})

export default persistReducer(persistConfig, rootReducer);