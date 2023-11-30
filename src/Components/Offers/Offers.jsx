import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import OfferCard from "./OfferCard";
// Swiper related import
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Offers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: offers = [] } = useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/coupons");
      return res.data;
    },
  });

  return (
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
      {offers.map((offer, index) => (
        <SwiperSlide key={index}>
          <div className="pb-14 px-10 md:px-20 lg:px-0">
            <OfferCard offer={offer}></OfferCard>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Offers;
