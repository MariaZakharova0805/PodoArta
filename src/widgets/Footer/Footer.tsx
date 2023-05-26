import c from "./Footer.module.css";
import SocialLinksBlock from "../../entities/SocialLinksBlock/SocialLinksBlock";
import { NavBar } from "../../entities/NavBar/NavBar";
import phoneW from "../../../public/icons/phoneWhite.svg";
import Logo from "../../entities/Logo/Logo";
import master from "../../../public/icons/mastercard.svg";
import visa from "../../../public/icons/visa.svg";
import mir from "../../../public/icons/mir.svg";
import mail from "/icons/mail.svg";
import map from "../../../public/icons/map.svg";
import clock from "../../../public/icons/clock.svg";
import { contacts } from "../../shared/constants";
export const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.footer_inner}>
        <div className={c.logo}>
          <Logo />
        </div>
        <div className={c.navbar}>
          <NavBar navbar="navbar_footer" />
        </div>
        <a href={contacts[1].link} target="_blank" className={c.adress}>
          <img src={map} />
          г.Москва,
          <br />
          {contacts[1].details}
        </a>
        <div className={c.time}>
          <img src={clock} />
          <div className={c.time_text}>
            <div className={c.time_text_block}>
              <p className={c.time_text_time}>10:00-22:00</p>
              <div>
                <p>Понедельник</p>
                <p>Вторник</p>
                <p>Среда</p>
                <p>Четверг</p>
                <p>Пятница</p>
                <p>Суббота</p>
              </div>
            </div>
          </div>
        </div>
        <div className={c.sociallinksblock}>
          <SocialLinksBlock colorType="white" />
        </div>
        <a href={contacts[0].link} className={c.phone}>
          <img src={phoneW} />
          {contacts[0].details}
        </a>
        <a href={contacts[3].link} className={c.email}>
          <img src={mail} />
          {contacts[3].details}
        </a>
        <p className={c.instagaminfo}>
          *Instagram продукт компании Мета, запрещенной на территории РФ
        </p>
        <div className={c.payments}>
          <img src={master} />
          <img src={visa} />
          <img src={mir} />
        </div>
      </div>
    </div>
  );
};
