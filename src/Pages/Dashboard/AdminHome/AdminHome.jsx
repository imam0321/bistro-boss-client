import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaProductHunt, FaTruck, FaUsers, FaWallet } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>

      <h1 className="text-3xl font-semibold my-6">Hi, {user.displayName} !</h1>
      <div className="stats shadow gap-2 ">
        <div className="stat items-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 rounded-md">
          <div className="stat-figure text-white">
          <FaWallet className="text-4xl ms-2" />
          </div>
          <div className="stat-value text-white">${stats.revenue}</div>
          <div className="stat-title text-white">Revenue</div>
        </div>

        <div className="stat items-center bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-md">
          <div className="stat-figure text-white">
          <FaUsers className="text-4xl ms-2"/> 
          </div>
          <div className="stat-value text-white">{stats.users}</div>
          <div className="stat-title text-white">Customers</div>
        </div>
        <div className="stat items-center bg-gradient-to-r from-rose-600 to-rose-300 rounded-md">
          <div className="stat-figure text-white">
          <FaProductHunt className="text-4xl ms-2"/> 
          </div>
          <div className="stat-value text-white">{stats.products}</div>
          <div className="stat-title text-white">Products</div>
        </div>
        <div className="stat items-center bg-gradient-to-r from-blue-500 to-blue-200 rounded-md">
          <div className="stat-figure text-white">
          <FaTruck className="text-4xl ms-2"/> 
          </div>
          <div className="stat-value text-white">{stats.orders}</div>
          <div className="stat-title text-white">Orders</div>
        </div>

       
      </div>
    </div>
  );
};

export default AdminHome;
