import c from "../ServiceAbout.module.css";
import { imagesOrtozy } from "../constants";
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

export const Ortozy = () => {
  return (
    <>
      <div className={c.slogan}>Межпальцевые разделители(Ортозы)</div>
      <p className={c.normal}></p>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {imagesOrtozy.map((img) => (
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
    </>
  );
};
