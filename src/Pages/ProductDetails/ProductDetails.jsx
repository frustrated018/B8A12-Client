import NavBar from "../../Components/NavBar/NavBar";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
//   fetching data
      const axiosPublic = useAxiosPublic();
    const { data: product = [] } = useQuery({
      queryKey: ["product"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/products/details/${id}`);
        return res.data;
      },
    });

    console.log(product);

  return (
    <>
      <NavBar></NavBar>
      <h3 className="text-center text-3xl text-green-500 my-14">
        Product Details will be here
      </h3>
      {/* Details section */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 w-[90%] lg:w-[70%] mx-auto">
        {/* Image */}
        <img
          alt="Student"
          src="https://source.unsplash.com/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg"
          className="h-56 w-full object-cover sm:h-full"
        />
        <div className="p-4">
          {/* All details about product */}

          <div className="flow-root rounded-lg border border-primary bg-secondary py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-primary text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Product Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Name of the product
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Tags</dt>
                <dd className="text-gray-700 sm:col-span-2">All the tags</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  facilis debitis explicabo doloremque impedit nesciunt dolorem
                  facere, dolor quasi veritatis quia fugit aperiam aspernatur
                  neque molestiae labore aliquam soluta architecto?
                </dd>
              </div>
            </dl>
          </div>
          {/* Upvote Downvote and Report button */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-[90%] mx-auto ">
            <button className="p-3 bg-green-400 rounded-md flex justify-center items-center gap-2">
              <BiSolidUpvote size={24} />
              <span>100</span>
            </button>
            <button className="p-3 bg-orange-400 rounded-md flex justify-center items-center gap-2">
              <BiSolidDownvote size={24} />
              <span>200</span>
            </button>
            <button className="p-3 bg-red-400 rounded-md flex justify-center items-center gap-2">
              <span>Report </span>
              <MdReport size={24} />
            </button>
            <button className="p-3 bg-blue-400 rounded-md flex justify-center items-center gap-2">
              <IoMdAddCircle size={24} />
              <span>Review</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
