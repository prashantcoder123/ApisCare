// import React from "react";

// export default function Home() {
//   return (
//     <section className="p-6">
//       <h2 className="text-3xl font-bold">Welcome to ApisCare</h2>
//       <p className="mt-2">Pure & Natural Honey from Muzaffarpur, Bihar.</p>
//     </section>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <section className="p-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Welcome to ApisCare PRIVATE LIMITED</h2>
      <h6><b className="text-blue-900">An ISO 9001:2015 Certified Company</b></h6>
      <p className="mt-2 text-orange-600">
  Pure & Natural <span className="">Honey</span> from Muzaffarpur, Bihar.
</p>


      {/* Image Slideshow */}
      <div className="mt-6 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
           
           
          <SwiperSlide>
            <img
              src="/images/honey1.jpg"
              alt="Honey 1"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/honey2.jpeg
              "
              alt="Honey 2"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/own1.jpg"
              alt="Honey 1"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/honey3.jpeg"
              alt="Honey 3"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/own2.jpg"
              alt="Honey 1"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/honey4.jpeg"
              alt="Honey 4"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/honey5.jpeg"
              alt="Honey 5"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}
