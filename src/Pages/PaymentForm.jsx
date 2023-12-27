import React, { useState } from "react";
import { CardElement, useStripe, useElements,Elements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { clearData } from "../Services/dataSlice"; // Import the action to clear data
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const nav=useNavigate();
    const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      const { token, error } = await stripe.createToken(elements.getElement(CardElement));

      if (error) {
        setPaymentError(error.message);
        return;
      }

      // Handle the token (e.g., send it to your server for payment processing)
      console.log(token);

      // Clear the data in your Redux store after successful payment
      dispatch(clearData());

      // Show a success message or redirect to a confirmation page
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your payment was successful. Thank you!',
        confirmButtonColor: '#28a745',
      });
      nav("/");
    } catch (err) {
      console.error("Error processing payment:", err);
      setPaymentError("Error processing payment. Please try again.");
    };
   
  };


  return (
   
   
<div>
      <h2 className=" text-center text-2xl font-bold mb-4">Payment Information</h2>
     
      <CardElement
    options={{
        style: {
          base: {
            fontSize: "16px",
            color: "#fce8e8", // Text color
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif', // Font family
            "::placeholder": {
              color: "#aab7c4", // Placeholder color
            },
          },
          invalid: {
            color: "#fa755a", // Invalid text color
          },
        },
      }}
      />
     
      {paymentError && <p className="text-red-500">{paymentError}</p>}
      <button
        className="text-white my-4 mx-4 text-end btn glass btn-wide bg-red-700"
        onClick={handlePayment}
        disabled={!stripe}
      >
        Pay Now
      </button>
    </div>
  
  );
};

export default PaymentForm;
