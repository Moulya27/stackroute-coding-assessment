import React from "react";

import { useNavigate } from "react-router-dom";

function Profile({ name }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Hi {name}</h2>
      <button type="button" class="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
