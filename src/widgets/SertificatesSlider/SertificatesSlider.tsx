import { useSertificates } from "../../shared/store";
import c from "./SertificatesSlider.module.css";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from "react";

export const SertificatesSlider = () => {
  const sertificates = useSertificates((state) => state.sertificates);
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
      slidesPerView={itemWidth}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      className={c.certificates}
    >
      {sertificates.map((img) => {
        return (
          <SwiperSlide key={img.id}>
            <LazyLoadImage
              alt={img.alt}
              effect="blur"
              src={img.image}
              placeholderSrc={img.imageSM}
              visibleByDefault={img.image === img.imageSM}
              className={c.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
