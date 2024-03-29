import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem('access-token');
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// normal validation
// queryFn: async () => {
//   const res = await fetch(`https://bistro-boss-server-imam-hossains-projects.vercel.app/carts?email=${user.email}`,{
//     headers: {
//       authorization: `bearer ${token}`
//     }
//   })
//   return res.json()
// },
