import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { clearData } from "../Services/dataSlice"; // Import the action to clear data
 import Swal from "sweetalert2";
import "../css/style.css"

import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const nav = useNavigate();
  //The useStripe hook is part of the @stripe/react-stripe-js library, and it's used in React components to access the stripe object. The stripe object is an instance of the Stripe.js library, which provides methods for interacting with the Stripe API and handling payment-related functionality.
  //You use the useStripe hook to get the stripe object within your functional component.Inside the component, you can use the stripe object to call various methods, such as confirmCardPayment in the example. This method is used to confirm a payment with the provided client_secret and payment details.You can then handle the result of the payment confirmation, which may include information about the success or failure of the payment.
  const stripe = useStripe();
  //The useElements hook is part of the @stripe/react-stripe-js library, and it's used in a React component to get access to the Elements context, which is required for interacting with various Stripe elements, including the CardElement.The useElements hook is called within a React functional component to obtain an instance of the Elements context.This hook is necessary when you're working with various Stripe elements (e.g., CardElement, CardNumberElement, etc.). It ensures that these elements are properly connected to the Stripe API and can be used to create tokens or handle other Stripe-related tasks.
  const elements = useElements();
  const dispatch = useDispatch();

  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      //stripe: This is the stripe object obtained using the useStripe hook. It's an instance of the Stripe.js library and provides methods for interacting with the Stripe API.elements.getElement(CardElement): This part uses the CardElement component from the @stripe/react-stripe-js library to retrieve the current state of the card element. The CardElement is a pre-built component that renders an input field for card details.stripe.createToken(...): The createToken method is called on the stripe object. It's used to convert sensitive card information (entered by the user in the CardElement) into a single-use token. The token represents the card details securely and can be used in the server-side code to initiate a payment.
      const { token, error } = await stripe.createToken(
        elements.getElement(CardElement)
      );

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
        icon: "success",
        title: "Success!",
        text: "Your payment was successful. Thank you!",
       background:"#212730",
       confirmButtonColor: "#b52a2a" 
       
    
      });
      
      nav("/");
    } catch (err) {
      console.error("Error processing payment:", err);
      setPaymentError("Error processing payment. Please try again.");
    }
  };

  return (
    <div>
      <h2 className=" text-center text-2xl font-bold mb-4">
        Payment Information
      </h2>

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
   <div className=" flex items-center justify-center">
   <button
        className="text-white text-center my-4 mx-4  btn glass btn-wide bg-red-700"
        onClick={handlePayment}
        disabled={!stripe}
      >
        Pay Now
      </button>
   </div>
    </div>
  );
};

export default PaymentForm;
