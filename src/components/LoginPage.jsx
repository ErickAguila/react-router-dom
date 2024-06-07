import React, { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({username});
  };

  if (auth.user) return <Navigate to='/profile'/>

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="">Nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
