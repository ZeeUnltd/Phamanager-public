import React from 'react'
import images from "../../constants/images";
import classes from "./Profile.module.scss";


function Profile() {


  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}>
        <img src={images.avt} alt="avatar" />
      </div>
      <div className={classes.profile__info}>
        <p className={classes.profile__userName}>{"Lazy Code"}</p>
        <span className={classes.profile__role}>{"Admin"}</span>
      </div>
    </div>
  );
}

export default Profile;
