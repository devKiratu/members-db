import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function UpdateMember() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="nav-btn">
        <Link to={"/"}>
          <button className="btn btn-nav btn-home">Back Home</button>
        </Link>
        <button className="btn btn-nav" onClick={() => setShowForm(!showForm)}>
          Edit Details
        </button>
      </div>
      <div className="member-details">
        <div>
          <ProfileCard />
        </div>
        {showForm && (
          <div className="form-container">
            <form>
              <div className="input-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type={"text"}
                  placeholder="first name"
                  required
                  id="firstname"
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type={"text"}
                  placeholder="last name"
                  required
                  id="lastname"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type={"email"} placeholder="email" required id="email" />
              </div>
              <div className="input-group">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type={"text"}
                  placeholder="Occupation"
                  required
                  id="occupation"
                />
              </div>
              <div className="input-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  placeholder="...a little about yourself"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="input-group">
                <button className="btn btn-submit">Update Details</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateMember;
