import { SET_MODAL } from "./actions";

const initialState = {
    isModal: false
};

export const ModalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MODAL:
            return {
                ...state,
                isModal: payload
            }
        default:
            return state;
    }
}