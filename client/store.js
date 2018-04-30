import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index' 
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk);

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
   };

const persistReducerWrapper = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistReducerWrapper, 
    reduxDevtools,       
    middleware
);

export const persistor = persistStore(store);