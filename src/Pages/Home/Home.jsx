import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tech Trends | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <FeaturedProduct></FeaturedProduct>
      <PopularProducts></PopularProducts>
      <Footer></Footer>
    </>
  );
};

export default Home;
