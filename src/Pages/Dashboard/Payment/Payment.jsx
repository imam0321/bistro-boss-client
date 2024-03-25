import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle subHeading="please pay" heading="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          cart={cart}
          refetch={refetch}
          price={price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
