import { Helmet } from "react-helmet";
import NavBar from "../../Components/NavBar/NavBar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/approvedproducts");
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Tech Trends | Products</title>
      </Helmet>
      <NavBar></NavBar>
      <h2 className=" text-center text-3xl text-red-600 mt-10">
        All products will be here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] lg:w-[80%] mx-auto my-20">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
