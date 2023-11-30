import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useToastify from "../../Hooks/useToastify";

const UpdateCoupon = () => {
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();

  const [oldCoupon, setOldCoupon] = useState({});

  // Getting data from the server and loading them inside the state as default values
  useEffect(() => {
    axiosSecure.get(`/coupons/findbyid/${params.id}`).then((res) => {
      setOldCoupon(res.data);
    });
  }, [axiosSecure, params.id]);

  console.log(oldCoupon);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const offerAmount = form.offerAmount.value;
    const message = form.message.value;
    const coupon = {
      offerAmount,
      message,
    };
    try {
      await axiosSecure
        .put(`/coupons/updatecoupon/${oldCoupon._id}`, {
          coupon,
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            successToast("Coupon Updated successfully!");
            navigate("/dashboard/managecuopons");
          }
        });
    } catch (error) {
      errorToast("Couldn't update Coupon.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <p className="text-xl mb-4 font-bold font-mono">
        Fill out the form to Update Coupon
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="offerAmount"
            className="block text-sm font-medium text-gray-600"
          >
            Offer Amount:
          </label>
          <input
            type="number"
            name="offerAmount"
            id="offerAmount"
            defaultValue={oldCoupon.offerAmount}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            defaultValue={oldCoupon.message}
            required
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Update Coupon
        </button>
      </form>
    </div>
  );
};

export default UpdateCoupon;
