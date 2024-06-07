import React from "react";
import { AuthRoute, useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const auth = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {auth.user.username}</p>
    </div>
  );
}

export default ProfilePage;
