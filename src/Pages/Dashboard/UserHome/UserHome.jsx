import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="mt-20">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-orange-300 ring-offset-base-100 ring-offset-2">
          <img src={user.photoURL} />
        </div>
      </div>
      <h1 className="text-xl font-semibold">Name: {user.displayName}</h1>
      <h1 className="text-xl font-semibold">Email: {user.email}</h1>
    </div>
  );
};

export default UserHome;
