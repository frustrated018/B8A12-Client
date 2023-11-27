import { Helmet } from "react-helmet";
import NavBar from "../../Components/NavBar/NavBar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../dummyProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Tech Trends | Products</title>
      </Helmet>
      <NavBar></NavBar>
      <h2 className=" text-center text-3xl text-red-600 mt-10">
        All products will be here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto my-20">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
