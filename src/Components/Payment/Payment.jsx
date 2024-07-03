import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import CheckOut from "../Checkout/CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRATE);


const PaymentsMoney = () => {
  const {money} = useContext(AuthUserContext)
  const [clientSecret, setClientSecret] = useState("");
  console.log(money)
  useEffect(()=>{
      fetch("http://localhost:5000/payment-create", {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({money})
      })
      .then((res)=> res.json())
      .then((data)=> setClientSecret(data.clientSecrate))
  }, [money])

  console.log(clientSecret)
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
       <div className="w-[40%] mx-auto">
       {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOut></CheckOut>
        </Elements>
      )}
       </div>
    </>
  );
};

export default PaymentsMoney;
