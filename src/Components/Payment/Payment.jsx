import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe("pk_test_51PKjZzCZsyVMtq3pYaTLPjSaixJCHVuZh9d0gPSPzmvuBQWngZvZo3c3RRGddrn0q4MH6PRHcaSN9Mv7HkJ96B3B00xpFsBcua")

const PaymentsMoney = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  )
}

export default PaymentsMoney