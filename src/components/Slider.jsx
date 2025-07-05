import React from "react";
import {
  HashNavigation,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#417F56",
        "--swiper-pagination-bullet-inactive-color": "#ADADAD",
        "--swiper-pagination-bullet-inactive-size": "8px",
        "--swiper-pagination-bullet-inactive-size": "18px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "23px"
      }}
      cssMode={true}
      navigation={true}
      hashNavigation={true}
      pagination={true}
      clickable={true}
      mousewheel={true}
      loop={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, HashNavigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary/85">slider 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 2</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 3</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 4</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 5</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 6</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 7</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 8</div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-100 bg-Primary">slider 9</div>{" "}
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
