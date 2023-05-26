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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7287242270677!2d37.59891017699447!3d55.78058318985092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535ad81edae41%3A0xdb8c568b2493c236!2zUG9kb0FydGEuINCh0YLRg9C00LjRjyDQv9C-0LTQvtC70L7Qs9C40Lgg0Lgg0Y3RgdGC0LXRgtC40LrQuCDQndCw0LPQsNC10LLQvtC5INCe0LvRjNCz0Lg!5e0!3m2!1sru!2sru!4v1704544493837!5m2!1sru!2sru"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <YandexButton />
    </div>
  );
};

export default IFrame;
