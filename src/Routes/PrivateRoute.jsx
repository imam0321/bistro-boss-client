import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return (
      <>
        <progress className="progress w-56" value={0} max="100"></progress>
        <progress className="progress w-56" value="10" max="100"></progress>
        <progress className="progress w-56" value="40" max="100"></progress>
        <progress className="progress w-56" value="70" max="100"></progress>
        <progress className="progress w-56" value="100" max="100"></progress>
      </>
    );
  }

  if (user) {
    return Children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
