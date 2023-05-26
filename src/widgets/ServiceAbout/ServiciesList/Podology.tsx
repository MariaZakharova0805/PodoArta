import { List } from "../../../shared/ui/List/List";
import c from "../ServiceAbout.module.css";
import { imagesPogology, listPodology } from "../constants";
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

export const Podology = () => {
  return (
    <>
      <div className={c.slogan}>Педикюр</div>
      <p className={c.normal}>
        Педикюр - это гигиеническая процедура, направленная на устранение
        дефектов кожи стоп и ногтей, их восстановление и профилактику появления
        разного рода нарушений и патологий.
      </p>
      <p className={c.normal}>
        В нашей студии мы поможем Вам решить такие проблемы, как:
      </p>
      <List list={listPodology} />
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
        {imagesPogology.map((img) => (
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
            В процедуру входит осмотр и консультация, аппаратная обработка кожи
            стоп, пальцев и ногтей, тампонирование боковых пазух ногтевых
            пластин. По завершении процедуры специалист дает рекомендации по
            домашнему уходу, составляет план восстановления и по необходимости
            направляет на прием к врачу.
          </i>
        </b>
      </p>
      <p className={c.normal}>
        <b>
          Стоимость процедуры зависит от квалификации специалиста и степени
          сложности процедуры.
        </b>
      </p>
    </>
  );
};
