import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({currentValue, key, setUpdatedUser, title, type, updatedUser, updating, value}) => {
    return (
        <p className={classes.ProfileInfo}>
            <strong>{title}: </strong> 
            {!updating ? currentValue : 
                <input 
                    onChange={(event) => setUpdatedUser({...updatedUser, [key]: event.target.value})}
                    placeholder={title}
                    type={type}
                    value={value}
                />
            }
        </p>
    );
}

export default ProfileInfo;

// {/* <p className={classes.ProfileInfo}>
//     <strong>First Name: </strong> 
//     {updating ? <input onChange={(event) => setUpdatedUser({...updatedUser, name: event.target.value})} placeholder="Username" type="text" value={updatedUser.name} /> : currentUser.name}
// </p> */}