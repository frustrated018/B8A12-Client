import { GrUpdate } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import useToastify from "../../../Hooks/useToastify";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // const { successToast } = useToastify();
  // Finding pending products
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`products/myproducts/${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Send DELETE request to the backend API
          await axiosPublic.delete(`/products/deleteproduct/${id}`);

          // Refetching to Update UI
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <p className="text-3xl font-bold mb-5">
        Total Pending products: {myProducts.length}
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
                <th className="text-center font-bold text-black">Update</th>
                <th className="text-center font-bold text-black">
                  Delete Product
                </th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((product, index) => (
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
                    <Link to={`/dashboard/details/${product._id}`}>
                      <button className="p-3 bg-secondary hover:bg-accent rounded-lg text-green-600">
                        <TbListDetails size={24} />
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to={`/dashboard/editproduct/${product._id}`}>
                      <button className="p-3 bg-secondary hover:bg-accent rounded-lg text-green-600">
                        <GrUpdate size={24} />
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="p-3 bg-secondary hover:bg-accent rounded-lg text-red-600"
                    >
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

export default MyProducts;
