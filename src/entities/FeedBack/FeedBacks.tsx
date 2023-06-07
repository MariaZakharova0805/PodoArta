import c from './FeedBacks.module.css'
import { useFeedbacks } from '../../shared/store'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide, } from 'swiper/react';
// @ts-ignore
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

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
          <div className={c.block__item}>
            <div className={c.block__item_header}>
              <div className={c.rating}>
                <div>{client.nickname}</div>
                <Rating name="read-only" value={client.rating} precision={0.5} readOnly />
              </div>
              <hr />
              <div className={c.header_item}>
                <p className={c.header_item_header}><span className={c.header_item_icon}><MiscellaneousServicesIcon /></span>услуга:</p>
                <p>{client.service}</p>
              </div>
              <div className={c.header_item}>
                <p className={c.header_item_header}><span className={c.header_item_icon}><AccountCircleIcon /></span>врач:</p>
                <p className={c.header_item_link}><Link key={client.id} to={`/specialists/${client.specialistParam}`}>{client.specialist}</Link></p>
                <p></p>
              </div>
            </div>
            <div className={c.block__item_text}>
              <p>{client.text}</p><a href={client.link} target='_blank' className={c.link}>смотреть отзыв в источнике</a>
            </div>
          </div>
        </SwiperSlide>
      })}



    </Swiper>



    // <div
    //   className={c.block}>
    //   {feedbacks.map(client =>
    //     <div key={client.id} className={c.block__item}>
    //       <div className={c.block__item_header}>
    //         <div className={c.rating}>
    //           <div>{client.nickname}</div>
    //           <Rating name="read-only" value={client.rating} precision={0.5} readOnly />
    //         </div>
    //         <hr />
    //         <div className={c.header_item}>
    //           <p className={c.header_item_header}><span className={c.header_item_icon}><MiscellaneousServicesIcon /></span>услуга:</p>
    //           <p>{client.service}</p>
    //         </div>
    //         <div className={c.header_item}>
    //           <p className={c.header_item_header}><span className={c.header_item_icon}><AccountCircleIcon /></span>врач:</p>
    //           <p className={c.header_item_link}><Link key={client.id} to={`/specialists/${client.specialistParam}`}>{client.specialist}</Link></p>
    //           <p></p>
    //         </div>
    //       </div>
    //       <div className={c.block__item_text}>
    //         <p>{client.text}</p><a href={client.link} target='_blank' className={c.link}>смотреть отзыв в источнике</a>
    //       </div>
    //     </div>
    //   )}
    // </div>
  )
}
