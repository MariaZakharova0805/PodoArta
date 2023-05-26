import c from "../ServiceAbout.module.css";
import { correctionSystems } from "../constants";
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

export const CorrectionSystem = () => {
  return (
    <>
      <div className={c.slogan}>Коррекционные системы</div>
      <p className={c.normal}>
        Деформации ногтя причиняют не только эстетический дискомфорт, но и часто
        являются причиной врастания ногтевой пластины в мягкие ткани. И самым
        эффективным методом исправления ситуации является установка
        корректирующих систем.
      </p>
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
        {correctionSystems.map((img) => (
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
      <p className={c.normal}>
        <b>
          <i>
            В стоимость процедуры входит осмотр, консультация, установка
            корректирующий системы, тампонирование пазух, наложение повязки по
            необходимости, рекомендации ухода.
          </i>
        </b>
      </p>
      <p className={c.normal}>
        Перед установкой необходима обязательная обработка ногтевой пластины,
        которая оплачивается дополнительно.
      </p>
      <p className={c.normal}>
        Вид необходимых систем определяет специалист на приеме, исходя из
        особенностей врастания или деформации.
      </p>
    </>
  );
};
