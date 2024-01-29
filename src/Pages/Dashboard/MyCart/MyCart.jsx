import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { NavLink } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => parseFloat(item.price + sum).toFixed(2), 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading="My Cart"
        heading="ADD MORE?"
      ></SectionTitle>
      <div className="uppercase flex justify-between items-center mb-5">
        <h1 className="text-2xl">Total item: {cart.length}</h1>
        <h1 className="text-2xl">Total Price: ${total}</h1>
        <NavLink to='/dashboard/payment' className="btn bg-[#D1A054] btn-sm text-white">PAY</NavLink>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Food" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
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

export default MyCart;
