import c from "./SpecialOffers.module.css"
import offer1 from "../../../public/img/specialoffers/bd-offer.jpg"
import offer1SM from "../../../public/img/specialoffers/bd-offerSM.png"

import offer2 from "../../../public/img/specialoffers/pension-offer.jpg"
import offer2SM from "../../../public/img/specialoffers/pension-offerSM.png"

import { LazyLoadImage } from "react-lazy-load-image-component"

export const SpecialOffers = () => {
    return (
        <div className={c.block}>
            <div className={c.bday}>
                <LazyLoadImage src={offer1} placeholderSrc={offer1SM} alt="Скидка 15% на день рождения" className={c.img} />
                <div className={c.block_text}>
                    <h3>Скидка ко Дню Рождения</h3>
                    <h4>Скидка 15% на любую процедуру</h4>
                    <h5>за неделю до и после Вашего Дня Рождения</h5>
                </div>
                <div className={c.pension}>
                    <LazyLoadImage src={offer2} placeholderSrc={offer2SM} alt="Скидка 20% пенсионерам 65+" className={c.pension_img} />
                    <div className={c.pension_block_text}>
                        <h3>Девушкам 65+</h3>
                        <h4>Скидка 15% на любую процедуру</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
