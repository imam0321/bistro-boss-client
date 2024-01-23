import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
  const {data: users = [], refetch} = useQuery( {
    queryKey: ['users'], 
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/users')
      return res.json();
    }
  })
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin naw`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })

  }

  const handleDelete = (user) => {
    
  }
  return (
    <div>
      <Helmet>
        <title>Bistro | All Users</title>
      </Helmet>
      <SectionTitle
        subHeading="How many??"
        heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="uppercase flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Total Users: {users.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="font-semibold">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-end">
                {
                  user.role === 'admin' ? 'admin' : 
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-[#D1A054] text-white hover:bg-[#D1A054]"
                  >
                    <FaUsers />
                  </button>
                }
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-red-600 text-white hover:bg-red-600"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;