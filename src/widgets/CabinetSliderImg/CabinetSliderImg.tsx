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
            effect="fade"
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
        > {cabImg.map(img => <SwiperSlide key={img.id}>
            <div className={c.img}><LazyLoadImage src={img.image}
                placeholderSrc={img.imageSM}
                alt={img.placeholder} /></div>
        </SwiperSlide>)}
        </Swiper>
    )
}