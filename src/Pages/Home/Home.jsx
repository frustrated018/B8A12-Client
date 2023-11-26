import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
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
      <Footer></Footer>
    </>
  );
};

export default Home;
