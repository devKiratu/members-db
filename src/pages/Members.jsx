import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/membersSlice";

function Members() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.members.loading);
  const members = useSelector((state) => state.members.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <h3>Fetching data. Please wait...</h3>;

  return (
    <div className="container">
      {members.length > 0 &&
        members.map((member) => (
          <Link to={`/members/${member._id}`} state={member} key={member._id}>
            <ProfileCard id={member._id} />
          </Link>
        ))}
    </div>
  );
}

export default Members;
