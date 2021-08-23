import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loading: false,
    users: []
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                loading: false,
                users: action.payload
            };
        case actionTypes.EDIT_USER:
            return {
                loading: false,
                users: state.map(user => user.userId === action.payload.userId ? action.payload : user)
            };
        case actionTypes.DELETE_USER:
            return {
                loading: false,
                users: state.filter(user => user.id !== action.payload)
            };
        case actionTypes.USERS_START:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default users;