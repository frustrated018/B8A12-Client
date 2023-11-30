import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useToastify from "../../Hooks/useToastify";
import { useNavigate } from "react-router-dom";

// TODO: If I navigate the user to the profile page I don't need the transaction id. And i will disable the payment button once they get navigated but if they somehow manage to get back to the payment page I need to disable the payment method and show them their transation id.

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();

  // Fixed Price For my application
  const totalPrice = 25;
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalPrice,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
    } else {
      console.log("Payment Method: ", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      // console.log("Confirmation Error", confirmError);
      errorToast(confirmError.message);
    } else {
      // console.log("Payment Intent", paymentIntent);
      setTransactionId(paymentIntent.id);
      // Making the API call to update their verification status
      axiosSecure
        .patch(`/users/updateverification/${user.email}`, {
          verificationStatus: "verified",
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.updatedStatusCount > 0) {
            successToast("Payment Successful. You are a verified user now");
            navigate("/dashboard/userProfile");
          }
        });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Secure Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>
      </form>
      {transactionId && (
        <p className="mt-4 text-green-500">Transaction ID: {transactionId}</p>
      )}
    </div>
  );
};

export default CheckOutForm;
