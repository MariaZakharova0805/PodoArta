import c from "./Footer.module.css"
import SocialLinksBlock from "../../entities/SocialLinksBlock/SocialLinksBlock"
import { NavBarFooter } from "../../entities/NavBar/NavBarFooter"
import phoneW from "../../../public/icons/phoneWhite.svg"
import Logo from "../../entities/Logo/Logo"
import master from "../../../public/icons/mastercard.svg"
import visa from "../../../public/icons/visa.svg"
import mir from "../../../public/icons/mir.svg"
import mail from "../../../public/icons/mail.svg"
import map from "../../../public/icons/map.svg"
import clock from "../../../public/icons/clock.svg"

export const Footer = () => {
    return (
        <div className={c.footer}>
                <div className={c.footer_inner}>
                    <div className={c.logo}><Logo /></div>
                    <div className={c.navbar}><NavBarFooter /></div>
                    <a href="https://yandex.kz/web-maps/org/podoarta/183344334290/?ll=37.620510%2C55.793343&utm_source=review&z=16" target="_blank" className={c.adress}><img src={map} />г.Москва,<br />ул. Сущёвский Вал, 63<br />1 этаж</a>
                    <div className={c.time}><img src={clock} />
                        <div className={c.time_text}>
                            <div className={c.time_text_block}>
                                <p className={c.time_text_time}>10:00-22:00</p>
                                <div>
                                    <p>Понедельник</p>
                                    <p>Вторник</p>
                                    <p>Четверг</p>
                                    <p>Суббота</p></div>
                            </div>
                            <div className={c.time_text_block}>
                                <p className={c.time_text_time}>10:00-16:00</p><p>Воскресенье</p>
                            </div>
                        </div>
                    </div>
                    <div className={c.sociallinksblock}><SocialLinksBlock colorType="white" /></div>
                    <a href="tel:79045682983" className={c.phone}><img src={phoneW} />+7 904 56 82 983</a>
                    <a href="mailto:test@test.ru" className={c.email}><img src={mail} />test@test.ru</a>
                    <p className={c.instagaminfo}>*Instagram продукт компании Мета, запрещенной на территории РФ</p>
                    <div className={c.payments}>
                        <img src={master} /><img src={visa} /><img src={mir} />
                    </div>
                </div>

        </div>
    )
} 