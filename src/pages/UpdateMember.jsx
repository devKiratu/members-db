import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateData } from "../api";
import Form from "../components/Form";
import ProfileCard from "../components/ProfileCard";
import { getMemberByIdSelector, memberUpdated } from "../store/membersSlice";

function UpdateMember() {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const member = useSelector((state) => getMemberByIdSelector(state, id));

  const dispatch = useDispatch();

  const handleUpdate = (data) => {
    const updateObj = { id, ...data };
    dispatch(memberUpdated(updateObj));
    updateData(updateObj);
    setShowForm(false);
  };

  return (
    <div>
      <div className="nav-btn">
        <Link to={"/"}>
          <button className="btn btn-nav btn-home">Back Home</button>
        </Link>
        <button className="btn btn-nav" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Edit Details"}
        </button>
      </div>
      <div className="member-details">
        <div>
          <ProfileCard id={id} />
        </div>
        {showForm && <Form data={member} onSubmit={handleUpdate} />}
      </div>
    </div>
  );
}

export default UpdateMember;
