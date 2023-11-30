import { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../../Components/NavBar/NavBar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/approvedproducts");
      return res.data;
    },
  });

  // Search Function

  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchedProducts([]);
    } else {
      const res = await axiosPublic.get(
        `/products/findproductbytag?tag=${searchQuery}`
      );
      const searchedProducts = res.data;
      setSearchedProducts(searchedProducts);
    }
  };

  const displayProducts =
    searchedProducts.length > 0 ? searchedProducts : products;

  return (
    <>
      <Helmet>
        <title>Tech Trends | Products</title>
      </Helmet>
      <NavBar></NavBar>

      <div className="text-4xl text-black text-center mt-5">
        Search for products by Tag
      </div>
      <section className="flex justify-center items-center mt-8">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <button className="btn join-item" onClick={handleSearch}>
            Search
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] lg:w-[80%] mx-auto mt-10 mb-20">
        {displayProducts.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
