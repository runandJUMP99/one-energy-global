import * as actionTypes from "../actions/actionTypes";

const initialState = {
    modalContent = null,
    showModal = false
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return action.payload;
        case actionTypes.SET_MODAL_CONTENT:
            return action.payload;
        default:
            return state;
    }
};

export default users;