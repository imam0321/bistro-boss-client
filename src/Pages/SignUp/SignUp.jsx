import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa6";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label mx-auto">
              <Link to="/login" className="label-text-alt link link-hover">
                Already registered? Go to log in
              </Link>
            </label>
            <div className="mx-auto">
              <p>Or sign up with</p>
              <div className="space-x-2 mt-2 mx-auto">
                <button className="btn btn-outline btn-circle btn-sm">
                  <FaFacebookF />
                </button>
                <button className="btn btn-outline btn-circle btn-sm">
                  <FaGoogle />
                </button>
                <button className="btn btn-outline btn-circle btn-sm">
                  <FaGithub />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
