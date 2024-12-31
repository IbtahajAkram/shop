// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import persistStore from "redux-persist/es/persistStore";
// import storage from 'redux-persist/lib/storage'
// import { TodoSlicer } from "../feeature/todo/todoSlicer";

// const combineAll = combineReducers({
//     todo:TodoSlicer.reducer
// });

// const Storages = {
//     key: "root",
//     storage,
// }

// const persistCombine = persistReducer(Storages,combineAll);

// export const store = configureStore({
//     reducer:persistCombine
// });

// export const persistStores = persistStore(store);




import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import {TodoSlicer} from '../feeature/todo/todoSlicer'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
const WhereTostore = {
    key:"root",
    storage
}

const combineAllSlicer = combineReducers({
    todo:TodoSlicer.reducer
});

const combineAll = persistReducer(WhereTostore,combineAllSlicer);

export const store = configureStore({
    reducer:combineAll
})
const persistStores = persistStore(store);

export default persistStores;