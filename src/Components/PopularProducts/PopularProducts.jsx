import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCard from "../ProductCard/ProductCard";

const PopularProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data: popularProducts = [] } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/sortedbyvote");
      return res.data;
    },
  });


  return (
    <>
      <div className="text-center mt-8">
        <h2 className="text-5xl font-bold text-gray-800">
          Popular Product Selection
        </h2>
        <p className="text-base text-gray-500 mt-3">
          Check 6 of our most popular product, sorted by Upvotes for an exciting
          shopping experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] lg:w-[80%] mx-auto my-10">
        {popularProducts.slice(0, 6).map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
