import c from './FeedBacks.module.css'
import { useFeedbacks } from '../../shared/store'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
// import Rating from '@mui/material/Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const FeedBack = () => {
  const { feedbacks } = useFeedbacks((state) => state);
  return (
    <div className={c.block}>
      {feedbacks.map(client =>
        <div key={client.id} className={c.block__item}>
          <div className={c.block__item_header}>
            <div className={c.rating}>
              <div>{client.nickname}</div>
              {/* <Rating name="read-only" value={client.rating} precision={0.5} readOnly /> */}
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
            <div className={c.text}><p>{client.text}</p><a href={client.link} className={c.link}>смотреть отзыв</a></div>
            <div className={c.image}><LazyLoadImage src={client.img} /></div>
          </div>
        </div>
      )}
    </div>
  )
}
