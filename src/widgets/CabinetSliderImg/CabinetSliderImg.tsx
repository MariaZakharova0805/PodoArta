import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useCabinetImages } from '../../shared/store';
import { LazyLoadImage } from "react-lazy-load-image-component";
import c from "./CabinetSliderImg.module.css"

export const CabinetSliderImg = () => {
    const { cabImg } = useCabinetImages((state) => state);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
        > {cabImg.map(img => <SwiperSlide key={img.id} className={c.SwiperSlide}>
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
        </SwiperSlide>)}
        </Swiper>
    )
}