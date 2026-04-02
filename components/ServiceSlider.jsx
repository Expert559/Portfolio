import {
  RxLayers,
  RxCube,
  RxDesktop,
  RxMobile,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Frontend Development",
    description: "My expertise in several frameworks enables me to complete projects perfectly, while my mastery of CSS and HTML ensures visually stunning and user-friendly designs.",
  },
  {
    Icon: RxLayers,
    title: "Backend Development",
    description: "Entrust your project to me, and I will utilize my extensive experience in backend development and database designing to deliver exceptional results that surpass your expectations.",
  },
  {
    Icon: RxCube,
    title: "Full Stack Development",
    description: "With a deep understanding of PHP, JavaScript, and several frameworks, I'm capable of developing dynamic and engaging web applications that meet the highest standards.",
  },
  {
    Icon: RxMobile,
    title: "Mobile Application Development",
    description: "I specialize in crafting high-quality, user-centric mobile applications that cater to your unique business needs and help you stay ahead in the competitive market.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[340px] sm:h-[440px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
