import { FC } from "react";
import { Container } from "../../shared/ui/Container/Container";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { OnlineCheckInBtn } from "../../entities/OnlineCheckInBtn/OnlineCheckInBtn";
import c from "./Examples.module.css";
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
import { images } from "./constants";

export const Examples: FC = () => {
  return (
    <Container>
      <HeaderH2 textAlign="center">Примеры работ</HeaderH2>
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
        {images.map((img) => (
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
      <OnlineCheckInBtn />
    </Container>
  );
};
