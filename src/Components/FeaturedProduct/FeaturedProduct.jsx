import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: latestProducts = [] } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/sortedbydate");
      return res.data;
    },
  });

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  const showMoreButtonText =
    visibleProducts < latestProducts.length ? "Show More" : "Show Less";

  const handleShowLess = () => {
    setVisibleProducts(4);
  };

  return (
    <>
      <div className="text-center mt-8">
        <h2 className="text-5xl font-bold text-gray-800">
          Discover the Latest Arrivals
        </h2>
        <p className="text-base text-gray-500 mt-3">
          Explore our curated collection of products sorted by date for a fresh
          and exciting shopping experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] lg:w-[80%] mx-auto my-10">
        {latestProducts.slice(0, visibleProducts).map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={
            visibleProducts < latestProducts.length
              ? handleShowMore
              : handleShowLess
          }
          className="bg-accent hover:bg-secondary hover:text-black text-white px-4 py-2 rounded-md mb-5"
        >
          {showMoreButtonText}
        </button>
      </div>
    </>
  );
};

export default FeaturedProduct;
