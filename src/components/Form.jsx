import React, { useState } from "react";

function Form({ data, onSubmit }) {
  const name = data.name.split(" ");
  const [firstname, setFirstname] = useState(name[0]);
  const [lastname, setLastname] = useState(name[1] || "");
  const [email, setEmail] = useState(data.email);
  const [occupation, setOccupation] = useState(data.occupation);
  const [bio, setBio] = useState(data.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: `${firstname} ${lastname}`,
      email,
      occupation,
      bio,
    };
    onSubmit(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type={"text"}
            placeholder="first name"
            required
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type={"text"}
            placeholder="last name"
            required
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            placeholder="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type={"text"}
            placeholder="Occupation"
            required
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            required
            id="bio"
            placeholder="...a little about yourself"
            style={{ resize: "none" }}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <button className="btn btn-submit">Update Details</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
