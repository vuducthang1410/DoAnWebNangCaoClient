import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authLogin  from "./user/authSlide";
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer";
import rootSaga from "./rootSaga";
const sagaMiddleware= createSagaMiddleware()
const store=configureStore({
    reducer:reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export default store;