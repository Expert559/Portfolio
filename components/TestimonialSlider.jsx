import Image from "next/image";
import { RxStarFilled } from "react-icons/rx";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    star: 5,
    message:
      "He worked with us on a UX strategy project for a client. He is excellent. He really knows his stuff, is amazing presenting to clients and work has been outstanding to date. Highly recommend.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    star: 5,
    message:
      " Excellent contractor, made small change requests as new ideas came. Really reasonable pricing. Great quality work! Love it",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    star: 5,
    message:
      "It was an amazing experience to work with him. He is really polite and humble. I would like to work with him again.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4 flex">
                <RxStarFilled
                  className="text-4xl xl:text-6xl text-danger mx-auto md:mx-0" style={{ color: "yellow" }}
                  aria-aria-hidden
                />
                <RxStarFilled
                  className="text-4xl xl:text-6xl text-danger mx-auto md:mx-0" style={{ color: "yellow" }}
                  aria-aria-hidden
                />
                <RxStarFilled
                  className="text-4xl xl:text-6xl text-danger mx-auto md:mx-0" style={{ color: "yellow" }}
                  aria-aria-hidden
                />
                <RxStarFilled
                  className="text-4xl xl:text-6xl text-danger mx-auto md:mx-0" style={{ color: "yellow" }}
                  aria-aria-hidden
                />
                <RxStarFilled
                  className="text-4xl xl:text-6xl text-danger mx-auto md:mx-0" style={{ color: "yellow" }}
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
