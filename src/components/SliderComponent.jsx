import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

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
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/1489285831/photo/mechanic-changing-a-car-tire-and-talking-to-his-client-at-the-repair-garage.jpg?s=612x612&w=gi&k=20&c=6hcG3HO6tpZWLacEhQJQY5UKBCcT6JGrkmlFtxXvepM=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/165856037/photo/shopping-for-tires.jpg?s=612x612&w=0&k=20&c=Jtfg6R9XDDNa4N9dB6WB41_wOdy3H6VkIRBC59E5XeM=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/1457394257/photo/car-maintainance.jpg?s=612x612&w=0&k=20&c=649mDAbLQ_ydXCSz6_nE9YD0Vs3_nZz8zbapPs1BS2o=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/1808123746/photo/mechanic-changing-tire-in-car-service-tire-rotation-machine-car-mechanic-mounts-tire-on-wheel.jpg?s=612x612&w=0&k=20&c=n9gWPqmV4bVsymMcg_OkxOq_2cx93xcNqn-LGt7_QSY=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/503541492/photo/detailed-vehicle-assessment.jpg?s=612x612&w=0&k=20&c=iVHcrs4kI4nlVhQJQge-ebnKas3oidxCq8H_BzuiMHs=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/506824802/photo/using-a-tablet-while-fixing-a-bicycle.jpg?s=612x612&w=0&k=20&c=xfo7MXYXn1791vg2kfLLsrlWvcHV9Ih_C-ltzySEBnQ=" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SiderComponent;
