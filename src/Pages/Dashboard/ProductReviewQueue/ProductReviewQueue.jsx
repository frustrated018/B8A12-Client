import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useToastify from "../../../Hooks/useToastify";

const ProductReviewQueue = () => {
  const axiosSecure = useAxiosSecure();
  const { successToast } = useToastify();
  // Finding pending products
  const { data: pendingProducts = [], refetch } = useQuery({
    queryKey: ["pendingProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products/pendingproducts");
      return res.data;
    },
  });

  // Function to handle product approval
  const handleApproveProduct = async (productId) => {
    try {
      // Make the API call to approve the product
      await axiosSecure.post(`/products/statusapprove/${productId}`);

      //   success toast
        successToast("Product Approved")
      // refetching data afterwards
      refetch();
    } catch (error) {
      // Handle errors here
      console.error("Error approving product:", error);
    }
  };

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
                <th className="text-center font-bold text-black">#</th>
                <th className="text-center font-bold text-black">
                  Product Image
                </th>
                <th className="text-center font-bold text-black">
                  Product Name
                </th>
                <th className="text-center font-bold text-black">Owner Name</th>
                <th className="text-center font-bold text-black">
                  Owner email
                </th>
                <th className="text-center font-bold text-black">
                  Product Status
                </th>
                <th className="text-center font-bold text-black">
                  View Details
                </th>
                <th className="text-center font-bold text-black">
                  Approve Product
                </th>
                <th className="text-center font-bold text-black">
                  Reject Product
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingProducts.map((product, index) => (
                <tr key={product._id}>
                  <th className="text-center font-bold">{index + 1}</th>
                  <td className="text-center font-bold">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className=" w-20 rounded">
                          <img src={product.image} alt="Product image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center font-bold">{product.name}</td>
                  <td className="text-center font-bold">
                    {product.productOwner.name}
                  </td>
                  <td className="text-center font-bold">
                    {product.productOwner.email}
                  </td>
                  <td className="text-center font-bold uppercase">
                    {product.productStatus}
                  </td>
                  <td className="text-center">
                    <Link to={`/dashboard/products/details/${product._id}`}>
                      <button className="p-3 bg-secondary hover:bg-accent rounded-lg text-green-600">
                        <TbListDetails size={24} />
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleApproveProduct(product._id)}
                      className="p-3 bg-secondary hover:bg-accent rounded-lg text-green-600"
                    >
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
