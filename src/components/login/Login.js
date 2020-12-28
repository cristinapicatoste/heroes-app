import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from '../../types/types';


export const Login = ({ history }) => {

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

    dispatch({
      type: types.login,
      payload: {
        name: 'Cristina',
      }
    });

    // No elimina la historia de navegación 
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
