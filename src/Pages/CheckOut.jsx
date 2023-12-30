import React, { useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//The loadStripe function is part of the @stripe/stripe-js library and is commonly used in React applications with the @stripe/react-stripe-js wrapper. Its primary purpose is to initialize the Stripe object with your publishable key and return the configured Stripe object.
const stripePromise = loadStripe(
  "pk_test_51ORyHWEn6dwWwVwzUCbo9frDpScSBXt0cpBZKf19TNCoFpNXGenzzM7QUQO6HVMCQ7cntLSOcYnxSJPuzTU8jx6t00HWbekzgr"
);
const CheckOut = () => {
  const data = useSelector((state) => state.dataReducer);
  const [userEmail, setUserEmail] = useState("");
  const nav = useNavigate();
  const sendEmail = (toEmail, subject, message) => {
    const emailParams = {
      to_email: toEmail,
      subject: subject,
      message: message,
    };

    emailjs
      .send("service_nrgqk18", "booking_form", emailParams, "7dZ2mqZQPX190mJ-n")
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };
  const handleSendEmail = () => {
    if (!userEmail) {
      Swal.fire({
        icon: "error",
        title: "Email required!",
        text: "Please enter an email to proceed",
        background: "#212730",
        confirmButtonColor: "#b52a2a",
      });
      return;
    }

    const emailSubject = "Movie Ticketing Service";
    const emailMessage = `Your booking receipt is as follows :

    Movie: ${data.movie}
    
    Cinema: ${data.cinema}
    
    Room: ${data.room}
    
    Show Date: ${data.showDate}
    
    Show Time: ${data.showTime}
    
    Selected Seats: ${data.selectedSeat.map((seat) => seat.SeatNo).join(", ")}
    
    Total Seat Price: ${data.totalSeatPrice} MMK

    Please note that if you does not buy these booking within 12 hours ,the booking will be cancelled automatically! Thanks for choosing us !
  `;

    sendEmail(userEmail, emailSubject, emailMessage);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your booking receipt have been sent to your email! Thanks for choosing us !",
      background: "#212730",
      confirmButtonColor: "#b52a2a",
    });
    nav("/");
  };

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showBookInfo, setShowBookInfo] = useState(false);
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
      {/* Email input */}

      <div className=" block sm:flex items-center justify-center">
        <button
          onClick={() => {
            setShowBookInfo(true);
            setShowPaymentForm(false);
          }}
          className=" w-full text-white my-4  mx-4 text-end btn glass sm:btn-wide bg-red-700"
        >
          Book Now
        </button>
        <button
          className=" w-full   text-white my-4 mx-4 text-end btn glass sm:btn-wide bg-red-700"
          onClick={() => {
            setShowBookInfo(false);
            setShowPaymentForm(true);
          }}
        >
          Buy Now
        </button>
      </div>
      {showBookInfo && (
        <div className="m-4">
          <div className="">
            <label
              htmlFor="email"
              className="text-xl font-bold italic block text-center "
            >
              Enter your email to receive booking confirmation
            </label>
            <div className=" py-3 flex items-center justify-center">
              <input
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                id="email"
                value={userEmail}
                className="input input-bordered input-error w-full max-w-xs"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <button
              className=" w-full text-white my-4 mx-4  btn glass sm:btn-wide bg-red-700"
              onClick={handleSendEmail}
            >
              Send Email
            </button>
          </div>
        </div>
      )}
      {showPaymentForm && (
        //In the context of Stripe integration with React, the Elements component is typically used to wrap the components that contain Stripe elements. It ensures that the necessary Stripe context is available to those components, allowing them to interact with the Stripe.js library and handle payment-related functionality.
        //You create a stripePromise using loadStripe with your publishable key.You use the Elements component to wrap your component (MyCheckoutForm) that contains the Stripe elements.You pass the stripePromise to the stripe prop of the Elements component.By doing this, the Elements wrapper ensures that the stripe object is available to its child components. The child components can then use the useStripe and useElements hooks from @stripe/react-stripe-js to access the Stripe object and manage payment-related functionality. The Elements wrapper plays a crucial role in providing the necessary context for integrating Stripe elements into your React application.
        <div className=" m-12" >
          <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
        </div>
      )}
    </>
  );
};
//reload lk yin hoem route ko pyn yt ag lk alert box pya p
//route guard htl
// cinmea choosing ko pyinnpm run
export default CheckOut;
