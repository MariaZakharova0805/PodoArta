import { yandexLink } from "../../constants";
import c from "./YandexButton.module.css";
export const YandexButton = () => {
  return <a href={yandexLink} target="_blank" className={c.btn}></a>;
};
