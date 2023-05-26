import { useServecies } from "../../shared/store";
import c from './ServeciesBlock.module.css'

export const ServeciesBlock = () => {
    const { servecies } = useServecies((state) => state);

    return (
        <div className={c.block}>{servecies.map(item => {
            if (item.popular === true) return <div key={item.id} className={c.block__item}
                style={{
                    backgroundImage: `url(${item.imgMain})`
                }}
            >
                <p className={c.block__item_name}>{item.name}</p>
            </div>
        }
        )}
        </div>
    )
}