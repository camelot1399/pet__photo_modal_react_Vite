export const PHOTOS = 'PHOTOS';
export const CREATE_PHOTOS = 'CREATE_PHOTOS';
export const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';

export const createPhotosActions = (payload) => ({
    type: CREATE_PHOTOS,
    payload
});

export const setSelectedPhotoAction = (payload) => ({
    type: SET_SELECTED_PHOTO,
    payload
});