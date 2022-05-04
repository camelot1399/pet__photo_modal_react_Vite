import {createStore, combineReducers} from 'redux';
import { ModalReducer } from './modal/reducer';
import { PhotosReducer } from './photos';

const reducers = {
  photos: PhotosReducer,
  modal: ModalReducer,
}

const reducer = combineReducers(reducers);
export const store = createStore(reducer);