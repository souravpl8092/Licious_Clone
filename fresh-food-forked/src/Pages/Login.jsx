import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

function Login() {
  const { login, isAuth } = useContext(AppContext);
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login </button>
    </div>
  );
}

export default Login;
