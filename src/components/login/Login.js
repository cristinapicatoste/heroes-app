import React from "react";

export const Login = ({ history }) => {
  const handleLogin = () => {
    // history.push("/");
    //Elimina la historia de navegación
    history.replace("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button className="blue" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
