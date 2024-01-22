import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result)=> {
      const loggedInUser = result.user
      const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
          fetch("http://localhost:5000/users",{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
              
              navigate(from, { replace: true });
            });
    })
  }

  return (
    <div className="mx-auto">
      <p>Or sign in with</p>
      <div className="space-x-2 mt-2 mx-auto">
        <button className="btn btn-outline btn-circle btn-sm">
          <FaFacebookF />
        </button>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle btn-sm">
          <FaGoogle />
        </button>
        <button className="btn btn-outline btn-circle btn-sm">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
