// import { legacy_createStore as createStore} from 'redux';
// import rootReducer from './reducers/index';

import { configureStore } from '@reduxjs/toolkit';
import numberReducer from "./reducers/NumberReducer";


// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore({
    reducer: {
        number: numberReducer
    }
});

export default store;