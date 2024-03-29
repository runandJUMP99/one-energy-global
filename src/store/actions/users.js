import * as actionTypes from "../actions/actionTypes";
import * as api from "./api";

export const getUsers = () => async(dispatch) => {
    try {
        dispatch({type: actionTypes.USERS_START});

        const fetchedUsers = [];
        const {data} = await api.getUsers();

        for (let key in data) {
            fetchedUsers.push({
                ...data[key]
            });
        }

        dispatch({type: actionTypes.GET_USERS, payload: fetchedUsers});
    } catch(err) {
        console.log(err);
    }
};

export const editUser = (id, user) => async(dispatch) => {
    try {
        const {data} = await api.editUser(id, user);
        
        dispatch({type: actionTypes.EDIT_USER, payload: data});
    } catch(err) {
        console.log(err);
    }
};

// export const updateUsers = (users, token) => async(dispatch) => {
//     try {
//         const {data} = await api.updateUsers(users, token);

//         dispatch({type: actionTypes.EDIT_USER, payload: data});
//     } catch(err) {
//         console.log(err);
//     }
// };

export const deleteUser = (id, token) => (dispatch) => {
    try {
        api.deleteUser(id, token);

        dispatch({type: actionTypes.DELETE_USER, payload: id});
    } catch(err) {
        console.log(err);
    }
};