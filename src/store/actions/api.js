// import axios from "axios";

// const refreshUrl = process.env.REACT_APP_FIREBASE_REFRESH_URL + process.env.REACT_APP_FIREBASE_KEY;;
// const url = process.env.REACT_APP_FIREBASE_DATABASE_URL;

// export const refreshAuth = (refreshToken) => axios.post(refreshUrl, {grant_type: "refresh_token", refresh_token: refreshToken});

// export const getUsers = () => axios.get(`${url}/users.json`);
// export const editUser = (id, updatedUser) => axios.patch(`${url}/users/${id}.json`, updatedUser);
// export const updateUsers = (updatedUsers, token) => axios.patch(`${url}/users.json?auth=${token}`, updatedUsers);
// export const deleteUser = (id, token) => axios.delete(`${url}/users/${id}.json?auth=${token}`);