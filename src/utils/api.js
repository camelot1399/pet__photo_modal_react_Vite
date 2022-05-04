const BASE_URL = 'https://boiling-refuge-66454.herokuapp.com'

export const getPhotos = () => `${BASE_URL}/images`;
export const getSelectedPhoto = (imagesId) => getPhotos + `/${imagesId}`;