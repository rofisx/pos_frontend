import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './features/Auth/reducer';
import cartReducer from './features/Cart/reducer';
import productReducer from './features/Product/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer
});
const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;