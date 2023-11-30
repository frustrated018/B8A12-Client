import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ReviewCard from "./ReviewCard";
// Swiper related import
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Reviews = ({ productId }) => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/reviews/findbyproductId/${productId}`).then((res) => {
      setReviews(res.data);
    });
  }, [axiosPublic, productId]);

  return (
    <>
      <section className=" w-[80%] mx-auto bg-secondary rounded-lg shadow-lg">
        <div className="py-5">
          <h1 className="text-black text-center sm:text-4xl lg:text-5xl font-bold font-sans">
            Reviews
          </h1>
          <p className="text-neutral text-base text-center mt-2">
            Look What others think about this product
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="pb-14 px-10 md:px-20 lg:px-0">
                <ReviewCard review={review}></ReviewCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;
