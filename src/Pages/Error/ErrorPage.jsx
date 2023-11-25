import Lottie from "react-lottie";
import animationData from "./Animation - 1700919050657.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={500} width={500} />
      <div className="flex flex-col gap-7 items-center ml-14 md:ml-0 mb-10">
        <p className="text-xl lg:text-3xl text-center font-semibold w-full md:w-1/2 ">
          Oops! It looks like you&apos;ve wandered off the beaten path. While we
          work on it, why not return to the home page?
        </p>
        <Link to="/">
          <button className="px-4 py-2 bg-primary hover:bg-accent text-white rounded-lg">
            Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
