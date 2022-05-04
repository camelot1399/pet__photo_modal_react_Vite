import { CREATE_PHOTOS, SET_SELECTED_PHOTO } from "./actions";

const initialState = {
    list: null,
    selectedPhoto: null,
}

export const PhotosReducer = (state = initialState, {type, payload}) => {
    console.log('type', type);
    console.log('payload', payload);
    switch (type) {
        case CREATE_PHOTOS:
            return {
                ...state,
                list: payload
            }
        case SET_SELECTED_PHOTO:
            return {
                ...state,
                selectedPhoto: payload
            }
        default:
            return state;
    }
}