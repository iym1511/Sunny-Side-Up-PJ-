import { configureStore, combineReducers } from '@reduxjs/toolkit';
import WeatherApi from "./module/weatherApi";
import GeoApi from "./module/geoApi"
import persistReducer from 'redux-persist/lib/persistReducer';
import storageSession from "redux-persist/lib/storage/session"; // 세션 스토리지

const rootReducer = combineReducers({
    weatherApi: WeatherApi,
    geoApi: GeoApi
})

const persistConfig = {
    key: "Root", 
    storage: storageSession,
    list: ["weatherApi","geoApi"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
})

// useSelector 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입 정의

// useDispatch 타입 : 다른곳에서 dispatch 사용할때 타입오류 안나게 보장해줌
export type AppDispatch = typeof store.dispatch;

export default store