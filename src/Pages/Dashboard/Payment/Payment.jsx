import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../../Components/CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-secondary rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscription Details</h2>
      <p className="text-gray-600 mb-4">
        For a payment of $25, you will receive the following benefits:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Verification of your account.</li>
        <li>A monthly subscription to our newsletter.</li>
        <li>A chance to win tickets to the Apple launch event once a year.</li>
      </ul>
      <p className="text-sm text-gray-500 mb-4">
        Note: This is a monthly subscription.
      </p>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
