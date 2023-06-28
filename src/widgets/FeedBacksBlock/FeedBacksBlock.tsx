import { useEffect, useState } from 'react';
import { useFeedbacks } from '../../shared/store'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FeedBackItem from '../../entities/FeedBackItem/FeedBackItem';

export const FeedBack = () => {
  const { feedbacks } = useFeedbacks((state) => state);
  const [width, setWidth] = useState(window.innerWidth);
  const [itemWidth, setItemWidth] = useState(window.innerWidth / 2);
  useEffect(() => {
    if (width > 992) {
      setItemWidth(2)
    } else {
      setItemWidth(1)
    }
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={itemWidth}
      navigation
      pagination={{ clickable: true }}
    >
      {feedbacks.map(client => {
        return <SwiperSlide key={client.id}>
          <FeedBackItem client={client} />
        </SwiperSlide>
      })}
    </Swiper>
  )
}
