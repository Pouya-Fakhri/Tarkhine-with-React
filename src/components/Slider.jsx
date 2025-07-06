import SliderImage1 from "../assets/images/Slider-image-1.jpg";
import SliderImage2 from "../assets/images/Slider-image-2.jpg";
import SliderImage3 from "../assets/images/Slider-image-3.jpg";


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
import Button from "./Button";

function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#417F56",
        "--swiper-pagination-bullet-inactive-color": "#ADADAD",
        "--swiper-pagination-bullet-inactive-size": "8px",
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-inactive-size": "18px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "23px",
      }}
      cssMode={true}
      navigation={true}
      hashNavigation={true}
      pagination={true}
      clickable={"true"}
      mousewheel={true}
      loop={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, HashNavigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className={`w-screen h-100  bg-line flex flex-col items-center justify-center gap-10 `}
          style={{
            backgroundImage: `url(${SliderImage1})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-[#E5F2E9] font-[vazir-bold] text-[40px]">
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </p>
          <Button
            width={184}
            height={40}
            text={"سفارش آنلاین غذا"}
            color={"Primary"}
            textColor={"#fff"}
            rounded={8}
            textSize={16}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`w-screen h-100  bg-line flex flex-col items-center justify-center gap-10 `}
          style={{
            backgroundImage: `url(${SliderImage2})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-[#E5F2E9] font-[vazir-bold] text-[40px]">
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </p>
          <Button
            width={184}
            height={40}
            text={"سفارش آنلاین غذا"}
            color={"Primary"}
            textColor={"#fff"}
            rounded={8}
            textSize={16}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={`w-screen h-100  bg-line flex flex-col items-center justify-center gap-10 `}
          style={{
            backgroundImage: `url(${SliderImage3})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-[#E5F2E9] font-[vazir-bold] text-[40px]">
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </p>
          <Button
            width={184}
            height={40}
            text={"سفارش آنلاین غذا"}
            color={"Primary"}
            textColor={"#fff"}
            rounded={8}
            textSize={16}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
