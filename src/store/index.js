// import { legacy_createStore as createStore} from 'redux';
// import rootReducer from './reducers/index';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import numberReducer from "./reducers/NumberReducer";
// import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';

/*
    localStorage
    import storage from 'redux-persist/lib/storage';

    sessionStorage
    import sessionStorage from 'redux-persist/es/storage/session';
*/

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const reducers = combineReducers({
    numberReducer
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['numberReducer']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;