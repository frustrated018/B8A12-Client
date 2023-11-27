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

  const { name, image, tags, upvoteCount, downvoteCount, longDescription } =
    product;

  return (
    <>
      <NavBar></NavBar>
      {/* Details section */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 w-[90%] lg:w-[70%] mx-auto my-20 shadow-lg">
        {/* Image */}
        <img
          alt="Student"
          src={image}
          className="h-56 w-full object-cover sm:h-full"
        />
        <div className="p-4">
          {/* All details about product */}

          <div className="flow-root rounded-lg border border-primary bg-secondary py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-primary text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Product Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Tags</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {tags && tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-accent rounded-lg px-3 py-1 text-sm font-semibold text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>No tags available</span>
                  )}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {longDescription}
                </dd>
              </div>
            </dl>
          </div>
          {/* Upvote Downvote and Report button */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-[90%] mx-auto ">
            <button className="p-3 bg-green-400 rounded-md flex justify-center items-center gap-2">
              <BiSolidUpvote size={24} />
              <span>{upvoteCount}</span>
            </button>
            <button className="p-3 bg-orange-400 rounded-md flex justify-center items-center gap-2">
              <BiSolidDownvote size={24} />
              <span>{downvoteCount}</span>
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
