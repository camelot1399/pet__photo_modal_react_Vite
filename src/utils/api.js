const BASE_URL = 'https://boiling-refuge-66454.herokuapp.com';

export const apiPhotosList = () => `${BASE_URL}/images`;
export const apiGetSelectedPhoto = (id) => `${apiPhotosList}/${id}`;