import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaProductHunt, FaTruck, FaUsers, FaWallet } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
} from "recharts";

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

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // Bar Chart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pieChert

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full">
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
            <FaUsers className="text-4xl ms-2" />
          </div>
          <div className="stat-value text-white">{stats.users}</div>
          <div className="stat-title text-white">Customers</div>
        </div>
        <div className="stat items-center bg-gradient-to-r from-rose-600 to-rose-300 rounded-md">
          <div className="stat-figure text-white">
            <FaProductHunt className="text-4xl ms-2" />
          </div>
          <div className="stat-value text-white">{stats.products}</div>
          <div className="stat-title text-white">Products</div>
        </div>
        <div className="stat items-center bg-gradient-to-r from-blue-500 to-blue-200 rounded-md">
          <div className="stat-figure text-white">
            <FaTruck className="text-4xl ms-2" />
          </div>
          <div className="stat-value text-white">{stats.orders}</div>
          <div className="stat-title text-white">Orders</div>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-1/2">
          <BarChart
            width={400}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2 ms-20">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Legend
                margin={{
                  left: 50,
                }}
              ></Legend>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    name={entry.category}
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
