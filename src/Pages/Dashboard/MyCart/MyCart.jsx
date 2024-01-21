import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";


const MyCart = () => {
  const [cart] = useCart()
  return (
    <div>
       <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>
      <SectionTitle subHeading='My Cart' heading='WANNA ADD MORE?'></SectionTitle>
      <h1>Total item {cart.length}</h1>
    </div>
  );
};

export default MyCart;