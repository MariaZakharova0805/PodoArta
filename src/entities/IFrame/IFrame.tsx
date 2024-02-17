import Iframe from "react-iframe";
import c from "./IFrame.module.css";
import { FC } from "react";
import { YandexButton } from "../../shared/ui/YandexButton/YandexButton";

interface InterfaceIframe {
  url?: string;
  src?: string;
  loading?: string;
  referrerpolicy?: string;
}

const IFrame: FC<InterfaceIframe> = () => {
  return (
    <div className={c.iframe}>
      <Iframe
        url=""
        src="https://yandex.ru/map-widget/v1/?ll=37.598928%2C55.782590&mode=poi&poi%5Bpoint%5D=37.601401%2C55.780634&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D210589391248&utm_source=share&z=19"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <YandexButton />
    </div>
  );
};

export default IFrame;
