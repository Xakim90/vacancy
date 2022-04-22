import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import productsReducer from '../reducers/productsReducer';
import catalogsReducer from '../reducers/catalogsReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import brandsReducer from '../reducers/brandsReducer';
import authReducer from '../reducers/authReducer';
import loaderReducer from "../reducers/loaderReducer";
import priceReducer from "../reducers/priceReducer";

let reducers = combineReducers({
    productsReducer: productsReducer,
    catalogsReducer: catalogsReducer,
    categoriesReducer: categoriesReducer,
    brandsReducer: brandsReducer,
    authReducer: authReducer,
    loaderReducer: loaderReducer,
    priceReducer: priceReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleWare) // redux-dev tools o'rnatilgan store
    )
);
window._store_ = store;

export default store;
