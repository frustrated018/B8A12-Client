import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const ReportedProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reportedProducts = [] } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products/reportedproducts");
      return res.data;
    },
  });

  console.log(reportedProducts);

  return (
    <>
      <p className="text-3xl font-bold mb-5">
        Total Reported products: {reportedProducts.length}
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
                  Un Report Product
                </th>
                <th className="text-center font-bold text-black">
                  Remove Product
                </th>
              </tr>
            </thead>
            <tbody>
              {reportedProducts.map((product, index) => (
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
                    {product.reportedStatus}
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
                      //   onClick={() => handleApproveProduct(product._id)}
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

export default ReportedProducts;
