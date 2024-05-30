import {useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submission prevented");

    if (!stripe || !elements) {
      console.log("Stripe.js has not yet loaded.");
      return;
    }

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/",
      },
    });

    if (error) {
      // Handle error
      console.error(error.message);
      setMessage(error.message);
      setLoading(false);
    } else {
      // Payment succeeded, see the return URL for the result
      setMessage("Payment successful!");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CheckOut;
