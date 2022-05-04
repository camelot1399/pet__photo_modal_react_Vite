import {createStore, combineReducers} from 'redux';
import { listReducer } from './list'

const reducers = {
  list: listReducer,
}

const reducer = combineReducers(reducers);
export const store = createStore(reducer);