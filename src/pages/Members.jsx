import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/membersSlice";
import Search from "../components/Search";
import Error from "../components/Error";

function Members() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.members.loading);
  const members = useSelector((state) => state.members.data);
  const error = useSelector((state) => state.members.error);

  const [filtered, setFiltered] = useState(members);

  const handleFilter = (data) => {
    setFiltered(data);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(members);
  }, [members]);

  if (loading) return <h3>Fetching data. Please wait...</h3>;

  if (error) return <Error error={error} />;

  return (
    <>
      <Search onFilter={handleFilter} items={members} />
      <div className="container">
        {filtered.length > 0 &&
          filtered.map((member) => (
            <Link to={`/members/${member.id}`} key={member.id}>
              <ProfileCard id={member.id} />
            </Link>
          ))}
      </div>
    </>
  );
}

export default Members;
