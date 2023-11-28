import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

const ProductReviewQueue = () => {
  const axiosSecure = useAxiosSecure();

  const { data: pendingProducts = [] } = useQuery({
    queryKey: ["pendingProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products/pendingproducts");
      return res.data;
    },
  });

  return (
    <>
      <p className="text-3xl font-bold mb-5">
        Total Pending products: {pendingProducts.length}
      </p>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center font-bold text-black text-lg">#</th>
                <th className="text-center font-bold text-black text-lg">Product Image</th>
                <th className="text-center font-bold text-black text-lg">Product Name</th>
                <th className="text-center font-bold text-black text-lg">Owner Name</th>
                <th className="text-center font-bold text-black text-lg">Owner email</th>
                <th className="text-center font-bold text-black text-lg">Product Status</th>
                <th className="text-center font-bold text-black text-lg">Approve Product</th>
                <th className="text-center font-bold text-black text-lg">Reject Product</th>
              </tr>
            </thead>
            <tbody>
              {pendingProducts.map((product, index) => (
                <tr key={product._id}>
                  <th className="text-center font-bold">{index + 1}</th>
                  <td className="text-center font-bold">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-32 rounded">
                          <img
                            src={product.image}
                            alt="Product image"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center font-bold">{product.name}</td>
                  <td className="text-center font-bold">{product.productOwner.name}</td>
                  <td className="text-center font-bold">{product.productOwner.email}</td>
                  <td className="text-center font-bold uppercase">{product.productStatus}</td>
                  <td className="text-center">
                    <button className="p-3 bg-secondary hover:bg-accent rounded-lg text-green-600">
                      <IoCheckmarkSharp size={24} />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="p-3 bg-secondary hover:bg-accent rounded-lg text-red-600">
                      <RxCross2 size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductReviewQueue;
