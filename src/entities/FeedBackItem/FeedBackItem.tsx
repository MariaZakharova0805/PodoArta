import { FC } from 'react';
import c from "./FeedBacks.module.css"
import { Link } from 'react-router-dom';
import { useServecies } from '../../shared/store';
import { IServece } from '../../shared/inteface';
import foot from "../../../public/icons/foot.svg";

interface CLientI {
    text: string
    nickname: string
    service: IServece[]
    link?: string
}

type FeedBackItemProps = {
    client: CLientI
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
                            <div className={c.links_name} key={item.id} onClick={() => setActiveCategory(item.link)}>
                                <Link to="./servecies">#{item.name}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <p className={c.block__text}>{client.text}</p>
            <div className={c.block__link_container}>
                <a className={c.block__link} href={client.link} target='_blank'>смотреть отзыв полностью</a>
            </div>
        </div>
    )
}

export default FeedBackItem