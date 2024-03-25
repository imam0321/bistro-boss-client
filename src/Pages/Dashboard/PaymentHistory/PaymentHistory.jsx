import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading="History"
        heading="Payment History"
      ></SectionTitle>
      <h2 className="text3-xl font-bold">Total Payments: {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="font-bold">
              <th>No</th>
              <th>price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
