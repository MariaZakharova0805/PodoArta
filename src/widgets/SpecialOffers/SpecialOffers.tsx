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
                <div className={c.bday_img}><LazyLoadImage src={offer1} placeholderSrc={offer1SM} alt="Скидка 15% на день рождения" /></div>
                <div className={c.bday_text}>
                    <h3>Скидка ко Дню Рождения</h3>
                    <h4>Скидка 15% на любую процедуру за неделю до и после Вашего Дня Рождения</h4>
                </div>
            </div>
            <div className={c.pension}>
                <div className={c.pension_img} ><LazyLoadImage src={offer2} placeholderSrc={offer2SM} alt="Скидка 20% пенсионерам 65+" /></div>
                <div className={c.pension_text}>
                    <h3>Пенсионерам 65+</h3>
                    <h4>Скидка 20% на любую процедуру</h4>
                </div>
            </div>
        </div>
    )
}
