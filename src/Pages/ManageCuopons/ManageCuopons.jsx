import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageCuopons = () => {
  const axiosPublic = useAxiosPublic();

  const { data: cuopons = [] } = useQuery({
    queryKey: ["cuopons"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/coupons`);
      return res.data;
    },
  });

  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">
        Total Coupons: {cuopons.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-base font-bold text-white bg-primary">
            <tr>
              <th>#</th>
              <th className="text-center">Offer Amount</th>
              <th className="text-center">Message</th>
              <th className="text-center">Update coupon</th>
              <th className="text-center">Delete Coupon</th>
            </tr>
          </thead>
          <tbody>
            {cuopons.map((coupon, index) => (
              <tr key={coupon._id}>
                {/* number */}
                <th className="text-center">{index + 1}</th>
                {/* Amount */}
                <td className="text-base font-bold text-center">
                  {coupon.offerAmount}
                </td>
                {/* message */}
                <td className="text-base font-bold text-center">
                  {coupon.message}
                </td>
                {/* Update  */}
                <td className="text-center">
                  <Link to={`/dashboard/updatecoupon/${coupon._id}`}>
                    <button className="bg-secondary p-3 rounded-lg hover:bg-accent">
                      <FaEdit size={24} />
                    </button>
                  </Link>
                </td>
                {/* Delete */}
                <td className="text-center">
                  <button className="bg-secondary p-3 rounded-lg hover:bg-accent">
                    <FaTrashAlt className="text-red-600" size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCuopons;
