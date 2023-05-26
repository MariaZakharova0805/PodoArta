import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useCabinetImages } from "../../shared/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import c from "./CabinetSliderImg.module.css";
import { useEffect, useState } from "react";

export const CabinetSliderImg = () => {
  const { cabImg } = useCabinetImages((state) => state);
  const [width, setWidth] = useState(window.innerWidth);
  const [itemWidth, setItemWidth] = useState(window.innerWidth / 2);
  useEffect(() => {
    if (width > 992) {
      setItemWidth(2);
    } else {
      setItemWidth(1);
    }
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      loop={true}
      slidesPerView={itemWidth}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
    >
      {" "}
      {cabImg.map((img) => (
        <SwiperSlide key={img.id} className={c.SwiperSlide}>
          <div className={c.img}>
            <LazyLoadImage
              alt={img.placeholder}
              effect="blur"
              src={img.image}
              placeholderSrc={img.imageSM}
              visibleByDefault={img.image === img.imageSM}
              className={c.img}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
