import { GET_LIST } from './action';


const initialState = {
    list: [1,2,3]
}

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LIST:
            return state;
        default:
            return state; 
    }
}