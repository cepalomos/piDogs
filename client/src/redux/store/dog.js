import {createStore,applyMiddleware} from 'redux';
import storeDog from '../reducer/dog';
import {composeWithDevTools} from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';

const store = createStore(storeDog,composeWithDevTools(applyMiddleware(thunk)));

export default store;