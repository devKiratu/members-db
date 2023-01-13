import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function Members() {
  return (
    <>
      <Link to="/members/1">See member 1</Link>

      <div className="container">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
}

export default Members;
