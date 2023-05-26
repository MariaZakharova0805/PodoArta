import c from "./OnlineBooking.module.css";
import online from "../../../public/img/online.jpg";
import onlineSM from "../../../public/img/onlineSM.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../shared/ui/Button__green/Button";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { solineLink } from "../../shared/constants";

export const OnlineBooking = () => {
  return (
    <div className={c.block}>
      <HeaderH2 textAlign="center">
        Оставьте заявку
        <br />
        на консультацию
      </HeaderH2>
      <div className={c.green_container}>
        <div className={c.big_container}>
          <div className={c.block_text}>
            <h3 className={c.h3}>
              Хотите получить консультацию профессионального подолога?{" "}
            </h3>
            <p className={c.text}>
              Воспользуйтесь удобной платформой для быстрой онлайн-записи и
              выберите подходящее для Вас время
            </p>
            <a className={c.link} href={solineLink} target="_blank">
              <Button width="241px" margin="0 0 40px">
                записаться
              </Button>
            </a>
          </div>
          <LazyLoadImage
            className={c.img}
            src={online}
            placeholderSrc={onlineSM}
            alt="онлайн запись"
          />
        </div>
      </div>
    </div>
  );
};
