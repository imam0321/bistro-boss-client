import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import signUpImg from '../../assets/others/Illustration.svg'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(() => {
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {name: data.name, email: data.email}
          fetch("http://localhost:5000/users",{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Sign Up successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ml-12">
            <h1 className="text-5xl text-center font-bold py-5">SignUp now!</h1>
            <img src={signUpImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 ms-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("PhotoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500 ms-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 ms-2">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 ms-2">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 ms-2">Password is 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 ms-2">
                    Password is less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 ms-2">
                    Password must be one upper case, one lower case, one special
                    character, less then 20 characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <label className="label mx-auto">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already registered? Go to log in
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
