import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

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
      console.log("Confirmation Error", confirmError);
    } else {
      console.log("Payment Intent", paymentIntent);
      setTransactionId(paymentIntent.id);
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
