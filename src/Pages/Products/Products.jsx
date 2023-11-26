import NavBar from "../../Components/NavBar/NavBar";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  return (
    <>
      <NavBar></NavBar>
      <h2 className=" text-center text-3xl text-red-600 mt-20">
        All products will be here
      </h2>
      <div className="flex justify-center items-center mt-6">
          <ProductCard></ProductCard>
      </div>
    </>
  );
};

export default Products;
