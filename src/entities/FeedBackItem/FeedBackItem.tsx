import { FC } from 'react';
import c from "./FeedBacks.module.css"
import { Link } from 'react-router-dom';
import { useServecies } from '../../shared/store';
import { IServece } from '../../shared/inteface';
import foot from "../../../public/icons/foot.svg"
type FeedBackItemProps = {
    client: any
}

const FeedBackItem: FC<FeedBackItemProps> = ({ client }) => {
    const { setActiveCategory } = useServecies((state) => state);

    return (
        <div className={c.block}>
            <div className={c.block__header}>
                <h4 className={c.block__header_clientname}>{client.nickname}</h4>
                <div className={c.block__header_service}>
                    <img src={foot} />
                    <div className={c.links}>
                        {client.service.map((item: IServece) =>
                            <Link to="./servecies" key={item.id}>
                                <p onClick={() => setActiveCategory(item.link)}>{item.name}</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <p className={c.block__text}>{client.text}</p>
            <a className={c.block__link} href={client.link} target='_blank'>смотреть отзыв полностью</a>
        </div>
    )
}

export default FeedBackItem