import Iframe from "react-iframe";
import c from "./IFrame.module.css";
import { FC } from "react";

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
        src="https://yandex.kz/map-widget/v1/?ll=37.636949%2C55.784592&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0MDk3NBJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCh0LvQtdGB0LDRgNC90YvQuSDQv9C10YDQtdGD0LvQvtC6LCA1IgoNO4wWQhVsI19C&tab=inside&z=17"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      {/* <YandexButton /> */}
    </div>
  );
};

export default IFrame;
