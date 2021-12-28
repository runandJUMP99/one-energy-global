import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Profile.module.css";
import logo from "../../../assets/images/logoBackground.png";
import { updateProfile } from "../../../store/actions/auth";
// import {getUsers} from "../../../store/actions/users";

const Profile = () => {
  const [deleting, setDeleting] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    firstName: "",
    img: "",
    imgValue: "",
    lastName: "",
    password: "",
    phone: "",
  });
  const [updating, setUpdating] = useState(false);
  const currentUser = useSelector(state => state.auth);
  const users = useSelector(state => state.users.users);
  const usersLoading = useSelector(state => state.users.loading);
  const currentUserData = users.find(
    user => user.firstName === currentUser.firstName
  );
  const error = currentUser.error;
  const loading = currentUser.loading;
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getUsers());
  // }, [currentUserData, dispatch]);

  function handleUpdating() {
    setDeleting(false);
    setUpdating(true);
  }

  function handleSubmit() {
    dispatch(updateProfile(updatedUser, currentUser.token));
    setUpdating(false);
  }

  if (!updatedUser.email) {
    console.log("if");
  }

  if (currentUserData && !updatedUser.email) {
    console.log("if");
    setUpdatedUser({
      email: currentUserData.email,
      firstName: currentUserData.firstName,
      img: "",
      imgValue: "",
      lastName: currentUserData.lastName,
      password: "",
      phone: currentUserData.phone,
      userId: currentUserData.userId,
    });
  }

  return (
    <div className={classes.Profile}>
      {deleting && !error ? (
        <ConfirmDelete setDeleting={setDeleting} />
      ) : loading || usersLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={currentUser.img ? currentUser.img : logo} alt="Avatar" />
          <p className={classes.Error}>{error}</p>
          <ProfileInfo
            currentValue={currentUser.firstName}
            label="firstName"
            setUpdatedUser={setUpdatedUser}
            title="First Name"
            type="text"
            updatedUser={updatedUser}
            updating={updating}
            value={updatedUser.firstName}
          />
          <ProfileInfo
            currentValue={currentUser.lastName}
            label="lastName"
            setUpdatedUser={setUpdatedUser}
            title="Last Name"
            type="text"
            updatedUser={updatedUser}
            updating={updating}
            value={updatedUser.lastName}
          />
          <ProfileInfo
            currentValue={currentUser.phone}
            label="phone"
            setUpdatedUser={setUpdatedUser}
            title="Phone Number"
            type="text"
            updatedUser={updatedUser}
            updating={updating}
            value={updatedUser.phone}
          />
          <ProfileInfo
            currentValue={currentUser.email}
            label="email"
            setUpdatedUser={setUpdatedUser}
            title="Email"
            type="email"
            updatedUser={updatedUser}
            updating={updating}
            value={updatedUser.email}
          />
          <ProfileInfo
            currentValue="•••••••••"
            label="password"
            setUpdatedUser={setUpdatedUser}
            title="Password"
            type="password"
            updatedUser={updatedUser}
            updating={updating}
            value={updatedUser.password}
          />
          {updating && (
            <p className={classes.PasswordCaption}>
              (Leave blank to not update password)
            </p>
          )}
          <button
            className={classes.Update}
            onClick={updating ? handleSubmit : handleUpdating}
          >
            {updating ? "Save" : "Update Profile"}
          </button>
          {!updating && (
            <button
              className={classes.Delete}
              onClick={() => setDeleting(true)}
            >
              Delete Profile
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;

//UPDATE IMAGES IF WANT TO USE USER IMAGES IN FUTURE

//FUNCTION TO HANDLE IMAGE UPLOAD

// function handleImageUpload(event) {
//     setUpdatedUser( {
//         ...updatedUser,
//         img: event.target.files[0],
//         imgValue: event.target.value
//     });
// }

//JSX CODE FOR IMAGE INPUT UPLOAD

// {updating && <div className={classes.FileInput}>
// <input
//     accept="image/*"
//     onChange={(event) => handleImageUpload(event)}
//     type="file"
//     value={updatedUser.imgValue}
// />
// </div>}
