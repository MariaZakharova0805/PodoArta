import { FC } from 'react';
import { Rating } from '@mui/material';
import c from "./FeedBacks.module.css"
import { Link } from 'react-router-dom';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useServecies } from '../../shared/store';
import { IServece } from '../../shared/inteface';

type FeedBackItemProps = {
    client: any
}

const FeedBackItem: FC<FeedBackItemProps> = ({ client }) => {
    const { setActiveCategory } = useServecies((state) => state);

    return (
        <div className={c.block__item}>
            <div className={c.block__item_header}>
                <div className={c.rating}>
                    <div>{client.nickname}</div>
                    <Rating name="read-only" value={client.rating} precision={0.5} readOnly />
                </div>
                <hr />
                <div className={c.header_item}>
                    <p className={c.header_item_header}><span className={c.header_item_icon}><MiscellaneousServicesIcon /></span>услуга:</p>
                    <div>
                        {client.service.map((item: IServece) =>
                            <Link to="./servecies" key={item.id}>
                                <span onClick={() => setActiveCategory(item.link)} className={c.service_link}>{item.name} </span>
                            </Link>
                        )}
                    </div>
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
    )
}

export default FeedBackItem