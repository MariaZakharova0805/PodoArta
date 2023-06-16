import c from "./Footer.module.css"
import SocialLinksBlock from "../../entities/SocialLinksBlock/SocialLinksBlock"
import { Container } from "../../shared/ui/Container/Container"
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
            <Container>
                <div className={c.footer_inner}>
                    <div className={c.logo}><Logo /></div>
                    <div className={c.navbar}><NavBarFooter /></div>
                    <div className={c.adress}><img src={map} />г.Москва,<br />ул. Сущёвский Вал, 63<br />1 этаж</div>
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
                    <div className={c.sociallinksblock}> <SocialLinksBlock colorType="white" /></div>
                    <div className={c.phone}><a href="tel:79045682983" className={c.phone}><img src={phoneW} />+7 904 56 82 983</a></div>
                    <div className={c.email}><img src={mail} />test@test.ru</div>
                    <p className={c.instagaminfo}>*Instagram продукт компании Мета, запрещенной на территории РФ</p>
                    <div className={c.payments}>
                        <img src={master} /><img src={visa} /><img src={mir} />
                    </div>
                </div>
            </Container>
        </div>
    )
} 