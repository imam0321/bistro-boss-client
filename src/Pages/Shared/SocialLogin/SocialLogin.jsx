import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            title: "User Login Successful.",
            showClass: {
              popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
            },
            hideClass: {
              popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
            },
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="mx-auto">
      <p>Or sign in with</p>
      <div className="space-x-2 mt-2 mx-auto">
        <button className="btn btn-outline btn-circle btn-sm">
          <FaFacebookF />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-circle btn-sm"
        >
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
