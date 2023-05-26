import c from "../ServiceAbout.module.css";
import { imagesGrowIn } from "../constants";
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

export const GrowIn = () => {
  return (
    <>
      <div className={c.slogan}>Коррекция врастания ногтей</div>
      <p className={c.normal}>
        Наши специалисты применяют только безоперационные методы коррекции и без
        применения анастезии, потому что вся процедура проходит в максимально
        короткое время и без боли.
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
        {imagesGrowIn.map((img) => (
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
            В процедуру входит осмотр, консультация, подстригание травмирующей
            части ногтя, обработка кожи пальцев, наложение повязки, рекомендации
            по домашнему уходу.
          </i>
        </b>
      </p>
      <p className={c.normal}>
        Соблюдение всех рекомендаций строго обязательно и гарантирует
        положительный результат работы.
      </p>
      <p className={c.normal}>
        <b>
          Стоимость процедуры зависит от степени сложности и определяется
          специалистом на приеме.
        </b>
      </p>
      <p className={c.normal}>
        При повышенной степени сложности врастания (2 и 3 степень) специалист
        может направить к необходимому в данном случае врачу.
      </p>
      <p className={c.normal}>
        Установка коррекционных систем, межпальцевых разделителей и разгрузочных
        повязок не входит в стоимость процедуры и оплачивается отдельно.
      </p>
    </>
  );
};
