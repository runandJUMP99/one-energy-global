import * as actionTypes from "../actions/actionTypes";

export const setShowModal = (show) => async(dispatch) => {
    dispatch({type: actionTypes.SHOW_MODAL, payload: show});
};

export const setModalContent = (content) => async(dispatch) => {
    dispatch({type: actionTypes.SET_MODAL_CONTENT, payload: content});
};