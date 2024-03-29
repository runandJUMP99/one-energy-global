import * as actionTypes from "../actions/actionTypes";
import * as api from "./api";
import {deleteUser, editUser} from "../actions/users";
import firebase from "firebase/app";
import "firebase/auth";

export const register = (isNewUser, setIsSignedUp, user) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.AUTH_START});

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        let currentUser;
        let response;
        
        if (isNewUser) {
            response = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
                });
            
            currentUser = firebase.auth().currentUser;

            const newUser = {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                tier: user.tier,
                userId: response.user.uid
            };
            
            await currentUser.updateProfile({displayName: user.firstName});
            await dispatch(editUser(newUser.userId, newUser));
        } else {
            response = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
                });
            currentUser = firebase.auth().currentUser;

            setIsSignedUp(true);
        }
        
        const token = await firebase.auth().currentUser.getIdToken(true);
        const userData = {
            email: currentUser.email,
            firstName: currentUser.displayName,
            lastName: "",
            phone: "",
            token: token,
            uid: response.user.uid
        }
        localStorage.setItem("oegexpirationDate", expirationDate);
        localStorage.setItem("oegtoken", userData.token);
        
        dispatch({type: actionTypes.AUTH, payload: userData});
        dispatch(checkAuthTimeout(expirationDate, response.user.refreshToken));
    } catch(err) {
        console.log(err);   
        dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
    }
}

export const updateProfile = (updatedUser) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.AUTH_START});

        const currentUser = firebase.auth().currentUser;

        if (updatedUser.email && updatedUser.email !== currentUser.email) {
            await currentUser.updateEmail(updatedUser.email);
        }

        if (updatedUser.password) {
            await currentUser.updatePassword(updatedUser.password);
        }

        currentUser.updateProfile({
            displayName: updatedUser.name
        });

        updatedUser = { //used to remove unnecessary data from being passed
            email: updatedUser.email,
            img: currentUser.photoURL ? currentUser.photoURL : "",
            name: updatedUser.name,
            userId: updatedUser.userId
        };
        
        dispatch(editUser(currentUser.uid, updatedUser));
        dispatch({type: actionTypes.AUTH_UPDATE_PROFILE, payload: updatedUser})
    } catch(err) {
        console.log(err);
        dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
    }
}

export const resetPassword = (email) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.AUTH_START});

        await firebase.auth().sendPasswordResetEmail(email);
        
        dispatch({type: actionTypes.AUTH_LOGOUT})
    } catch(err) {
        console.log(err);
        dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
    }
}

export const deleteProfile = (userId, token) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.AUTH_START});

        const currentUser = firebase.auth().currentUser;
        await currentUser.delete();
        
        await dispatch(deleteUser(userId, token));
        dispatch({type: actionTypes.AUTH_LOGOUT})
    } catch(err) {
        console.log(err);
        dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
    }
}

export const checkAuthTimeout = (expirationTime, refreshToken) => (dispatch) => {
    setTimeout(async() => {
        try {
            const {data} = await api.refreshAuth(refreshToken);

            localStorage.setItem("oegexpirationDate", data.expires_in * 1000);
            localStorage.setItem("oegtoken", data.id_token);

            dispatch({type: actionTypes.AUTH_REFRESH, payload: data.id_token});
        } catch(err) {
            console.log(err);
            dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
        }
    }, expirationTime);
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("oegexpirdationDate");
    localStorage.removeItem("oegtoken");

    dispatch({type: actionTypes.AUTH_LOGOUT})
};

export const authCheckState = () => (dispatch) => {
    const token = localStorage.getItem("oegtoken");

    if (!token) {
        dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem("oegexpirationDate"));

        if (expirationDate >= new Date()) {
            firebase.auth().onAuthStateChanged(user => {
                if (user){ 
                    const userData = {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phone: user.phone,
                        token: token,
                        uid: user.uid
                    }
        
                    dispatch({type: actionTypes.AUTH, payload: userData});
                    dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime(), user.refreshToken));
                }
                else {
                    dispatch(logout());
                }
            });
        } else {
            dispatch(logout());
        }
    }
};



//GOOGLE SIGN IN

// export const signInWithGoogle = () => async(dispatch) => {
//     try {
//         const provider = new firebase.auth.GoogleAuthProvider();
            
//         const response = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
//         const res = await firebase.auth().signInWithPopup(provider);
//         console.log(response);
//         console.log(res);
//     } catch(err) {
//         dispatch({type: actionTypes.AUTH_FAIL, payload: err.message});
//         console.log(err);
//     }
// }  


//UPDATE PROFILE FOR IMGS IF WANT TO ADD IMG AT LATER DATE

// if (updatedUser.img) {
        //     // const uploadTask = storage.ref(`/profileImgs/${updatedUser.userId}`).put(updatedUser.img);

        //     uploadTask.on("state_changed", snapshot => {
        //     }, err => {
        //         console.log(err);
        //     }, () => {
        //         storage.ref("profileImgs").child(updatedUser.userId).getDownloadURL()
        //             .then(firebaseUrl => {
        //                 currentUser.updateProfile({
        //                     displayName: updatedUser.name,
        //                     photoURL: firebaseUrl
        //                 });

        //                 updatedUser = { //used to remove unnecessary data from being passed
        //                     email: updatedUser.email,
        //                     img: firebaseUrl,
        //                     name: updatedUser.name,
        //                     userId: updatedUser.userId
        //                 };
                    
        //                 dispatch(editUser(currentUser.uid, updatedUser));
        //                 dispatch({type: actionTypes.AUTH_UPDATE_PROFILE, payload: updatedUser})
        //             });
        //     });


//DELETE PROFILE FOR IMGS IF WANT TO ADD IMG AT LATER DATE

// if (currentUser.photoURL) {
//     await storage.ref(`/profileImgs/${userId}`).delete();
// }