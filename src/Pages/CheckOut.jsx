import React, { useState } from "react";
import { useSelector } from "react-redux";

import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//The loadStripe function is part of the @stripe/stripe-js library and is commonly used in React applications with the @stripe/react-stripe-js wrapper. Its primary purpose is to initialize the Stripe object with your publishable key and return the configured Stripe object.
const stripePromise = loadStripe(
  "pk_test_51ORyHWEn6dwWwVwzUCbo9frDpScSBXt0cpBZKf19TNCoFpNXGenzzM7QUQO6HVMCQ7cntLSOcYnxSJPuzTU8jx6t00HWbekzgr"
);
const CheckOut = () => {
  const data = useSelector((state) => state.dataReducer);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  console.log(data);
  return (
    //    <div className=" w-full flex items-center justify-center">
    //    <div className=" w-[50%] ">
    //    <p className="  italic font-bold text-3xl text-center">  Confirm</p>
    //    <div className=" ">
    //    <div className=" my-4 flex items-center  justify-around">
    //          <p className=" text-xl w-32 text-right">Movie:</p>
    //          <p className=" text-xl  w-32 text-left">{data?.movie}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className= " text-xl  w-32 text-right">Cinema:</p>
    //          <p className=" text-xl  w-32    text-left">{data?.cinema}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right">Room:</p>
    //          <p className=" text-xl  w-32  text-left">{data?.room}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right">Show date:</p>
    //          <p className=" text-xl w-32  text-left">{data?.showDate}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl w-32 text-right">Show time:</p>
    //          <p className=" text-xl w-32   text-left">{data?.showTime}</p>
    //       </div>
    //       <div className=" my-4  flex items-center  justify-around">
    //          <p className=" text-xl  w-32 text-right"> Seat Chosen:</p>
    //          <div className=" text-xl w-32  text-left">
    //          {
    //          data?.selectedSeat?.map(s=>{
    //              return(
    //                  <p  className=" inline" >{s?.SeatNo},</p>
    //              )
    //              })
    //         }
    //          </div>
    //       </div>
    //    </div>
    //
    //    </div>

    //  </div>
    <>
      <h1 className="  italic font-bold text-3xl text-center">Confirm</h1>
      <table className=" table text-center">
        <tbody>
          <tr>
            <td className=" text-xl text-right">Movie:</td>
            <td className=" text-xl text-center">{data?.movie}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Cinema:</td>
            <td className=" text-xl text-center">{data?.cinema}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Room:</td>
            <td className=" text-xl text-center">{data?.room}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Show Date:</td>
            <td className=" text-xl text-center">{data?.showDate}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Show Time:</td>
            <td className=" text-xl text-center">{data?.showTime}</td>
          </tr>
          <tr>
            <td className=" text-xl text-right"> Seat Chosen:</td>
            <td className=" text-xl text-center">
              {" "}
              {data?.selectedSeat?.map((s) => {
                return <p className=" inline">{s?.SeatNo},</p>;
              })}
            </td>
          </tr>
          <tr>
            <td className=" text-xl text-right">Total Cost:</td>
            <td className=" text-xl text-center">{data?.totalSeatPrice}MMK</td>
          </tr>
        </tbody>
      </table>
      <div className=" block sm:flex items-center justify-center">
        <button className=" w-full text-white my-4  mx-4 text-end btn glass sm:btn-wide bg-red-700">
          Book Now
        </button>
        <button
          className=" w-full   text-white my-4 mx-4 text-end btn glass sm:btn-wide bg-red-700"
          onClick={() => setShowPaymentForm(true)}
        >
          Buy Now
        </button>
      </div>

      {showPaymentForm && (
        //In the context of Stripe integration with React, the Elements component is typically used to wrap the components that contain Stripe elements. It ensures that the necessary Stripe context is available to those components, allowing them to interact with the Stripe.js library and handle payment-related functionality.
        //You create a stripePromise using loadStripe with your publishable key.You use the Elements component to wrap your component (MyCheckoutForm) that contains the Stripe elements.You pass the stripePromise to the stripe prop of the Elements component.By doing this, the Elements wrapper ensures that the stripe object is available to its child components. The child components can then use the useStripe and useElements hooks from @stripe/react-stripe-js to access the Stripe object and manage payment-related functionality. The Elements wrapper plays a crucial role in providing the necessary context for integrating Stripe elements into your React application.
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};
//reload lk yin hoem route ko pyn yt ag lk alert box pya p
//route guard htl
// cinmea choosing ko pyinnpm run
export default CheckOut;
