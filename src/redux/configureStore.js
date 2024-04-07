import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authLogin  from "./authSlide";
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware= createSagaMiddleware()
const reducer=combineReducers({
    auth:authLogin
})
const store=configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
// sagaMiddleware.run({})
export default store;