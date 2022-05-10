import React from "react";
import imgProfile from "../selfPortrait.jpg";

const ProfilePhoto = () => {
  return (
    <img
      src={imgProfile}
      className="pro-img rounded-circle border border-secondary"
      alt="imgProfile"
    />
  );
};

export default ProfilePhoto;
