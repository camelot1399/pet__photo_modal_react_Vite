import {createStore, combineReducers} from 'redux';
import { PhotosReducer } from './photos';

const reducers = {
  photos: PhotosReducer,
}

const reducer = combineReducers(reducers);
export const store = createStore(reducer);