import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://bistro-boss-server-imam-hossains-projects.vercel.app/menu"
      );
      return res.json();
    },
  });
  return [menu, loading, refetch];
};

export default useMenu;

// const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(true);
// useEffect(()=> {
//   fetch('https://bistro-boss-server-imam-hossains-projects.vercel.app/menu')
//   .then(res => res.json())
//   .then(data => {
//     setMenu(data)
//     setLoading(false)
//   })
// }, [])
