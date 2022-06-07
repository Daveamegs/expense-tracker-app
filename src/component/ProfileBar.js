import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileImage from "../images/awmleer-profile.jpg"

const ProfileBar = () => {
  return (
    <div className="profile-bar">
      <IoMdNotificationsOutline className="notification-icon" />
      <img src={ProfileImage} width={25} height={25} alt="/" />
    </div>
  );
};

export default ProfileBar;
