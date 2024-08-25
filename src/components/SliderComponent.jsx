import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { SwiperImages } from "../AllData/Data";

const SiderComponent = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperImages.map((e) => (
          <SwiperSlide key={e.id}>
            <img src={e.images} alt="images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SiderComponent;
