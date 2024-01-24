import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();
  const [, refetch ] = useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food added on the Cart",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
      })
    }
    else{
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }
  }

  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-sm">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-orange-400 text-orange-400 border-0 border-b-4 mb-5">Add  to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
