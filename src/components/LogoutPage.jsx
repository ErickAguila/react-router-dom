import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label htmlFor="">Seguro de que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </div>
  );
}

export default LogoutPage;
