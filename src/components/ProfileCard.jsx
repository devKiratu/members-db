import React from "react";
import { useSelector } from "react-redux";
import headerBg from "../assets/bg-sidebar-mobile.svg";
import { getMemberByIdSelector } from "../store/membersSlice";

function ProfileCard({ id }) {
  const member = useSelector((state) => getMemberByIdSelector(state, id));
  const { name, email, occupation, bio } = member;
  const names = name.trim().split(" ");

  let initials;
  if (names.length === 1) {
    initials = names[0].substring(0, 2);
  } else {
    initials = `${names[0][0]} ${names[1][0]}`;
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={headerBg} alt="header background" />
      </div>
      <div className="initials">{initials}</div>
      <div className="card-content">
        <div>
          <p className="fullname">{name}</p>
          <p className="email">{email}</p>
          <p className="occupation">{occupation}</p>
        </div>
        <hr style={{ color: "#f3f3f3", width: "100%" }} />
        <div className="bio">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
