import { useState } from "react";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../../Components/NavBar/NavBar";
import Reviews from "../../Components/Reviews/Reviews";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import useAuth from "../../Hooks/useAuth";
import Offers from "../../Components/Offers/Offers";
import useToastify from "../../Hooks/useToastify";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { warningToast, errorToast } = useToastify();

  // Check if the route path contains '/dashboard'
  const isDashboardRoute = location.pathname.includes("/dashboard");

  // Fetching data
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/details/${id}`);
      return res.data;
    },
  });

  const {
    name,
    image,
    tags,
    upvoteCount,
    downvoteCount,
    longDescription,
    externalLinks,
    productOwner,
    productId,
  } = product;

  // State to manage the visibility of the review form
  const [isReviewFormVisible, setReviewFormVisible] = useState(false);

  // Handling Upvote
  const handleUpvote = async () => {
    await axiosPublic.post(`/products/upvote/${id}`);
    refetch();
  };

  // Handling Downvote
  const handleDownVote = async () => {
    await axiosPublic.post(`/products/downvote/${id}`);
    refetch();
  };

  const handleReport = async () => {
    try {
      const res = await axiosPublic.post(
        `products/markreported/${id}?reportedStatus=reported`
      );

      if (res.data.reportedStatus > 0) {
        warningToast("Product has been marked for review");
      } else {
        errorToast("Product couldn't be marked for review");
      }
    } catch (error) {
      console.error(error);
      errorToast("An error occurred while processing the report");
    }
  };


  
  // Toggle the visibility of the review form
  const handleAddReviewClick = () => {
    setReviewFormVisible(!isReviewFormVisible);
  };

  return (
    <>
      <Helmet>
        <title>Tech Trends | {`${name}`}</title>
      </Helmet>
      {/* Conditionally render NavBar based on the route */}
      {!isDashboardRoute && <NavBar />}
      {/* Offers section */}
      <section className="flex justify-center items-center mt-8">
        <Offers></Offers>
      </section>

      {/* Details section */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 w-[90%] lg:w-[70%] mx-auto my-20 shadow-lg">
        {/* Image */}
        <img
          alt=""
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

              {/* External Links */}
              {externalLinks && externalLinks.length > 0 && (
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">External Links</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    <div className="flex flex-wrap gap-2">
                      {externalLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </dd>
                </div>
              )}

              {/* Product Owner */}
              {productOwner && (
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Product Owner</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {productOwner.name}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Upvote Downvote and Report button */}
          {/* TODO: Make this hidded for a couple of clause like no user if owner email === user.email */}
          <div
            hidden={!user}
            className="mt-5 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-2 w-[90%] mx-auto "
          >
            {/* upvote button */}
            <button
              onClick={handleUpvote}
              className="p-3 bg-green-400 rounded-md flex justify-center items-center gap-2"
            >
              <BiSolidUpvote size={24} />
              <span>{upvoteCount}</span>
            </button>
            {/* downvote button */}
            <button
              onClick={handleDownVote}
              className="p-3 bg-orange-400 rounded-md flex justify-center items-center gap-2"
            >
              <BiSolidDownvote size={24} />
              <span>{downvoteCount}</span>
            </button>
            {/* report button */}
            <button
              onClick={handleReport}
              className="p-3 bg-red-400 rounded-md flex justify-center items-center gap-2"
            >
              <span>Report </span>
              <MdReport size={24} />
            </button>
            {/* review button */}
            <button
              onClick={handleAddReviewClick}
              className="p-3 bg-blue-400 rounded-md flex justify-center items-center gap-2"
            >
              <IoMdAddCircle size={24} />
              <span>Add Review</span>
            </button>
          </div>

          {/* Review Form (conditionally rendered based on visibility state) */}
          {isReviewFormVisible && (
            <ReviewForm
              productId={productId}
              userEmail={user?.email}
              userName={user?.displayName}
              userImage={user.photoURL}
            />
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="my-10">
        <Reviews productId={productId}></Reviews>
      </section>
    </>
  );
};

export default ProductDetails;
