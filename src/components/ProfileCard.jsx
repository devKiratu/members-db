import React from "react";
import headerBg from "../assets/bg-sidebar-mobile.svg";
function ProfileCard() {
  return (
    <div className="card">
      <div className="card-header">
        <img src={headerBg} alt="header background" />
      </div>
      <div className="initials">Initials</div>
      <div className="card-content">
        <div>
          <p className="fullname">Lar Janus</p>
          <p className="email">lar.janus@itv.uk</p>
          <p className="occupation">Potter</p>
        </div>
        <hr style={{ color: "#f3f3f3", width: "100%" }} />
        <div className="bio">
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros est,
            ultrices eget purus eget
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
