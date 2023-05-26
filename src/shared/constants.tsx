import { v1 as uuidv1 } from "uuid";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

export const contacts = [
  {
    id: uuidv1(),
    title: "Телефон",
    details: "+7 (985) 973-02-82",
    img: <PhoneInTalkIcon />,
    link: "tel:+79998747811",
  },
  {
    id: uuidv1(),
    title: "г.Москва",
    details: "м.Новослободская, ул. Сущёвская, д.9/10, стр.5",
    img: <RoomIcon />,
    link: "https://yandex.kz/web-maps/org/podoarta/210589391248/?ll=37.601372%2C55.780636&utm_source=review&z=17",
  },
  {
    id: uuidv1(),
    title: "Режим работы:",
    details: "Пн-сб: 10:00-22:00",
    img: <AccessTimeIcon />,
  },
  {
    id: uuidv1(),
    title: "E-mail:",
    details: "o-v-nagaeva1987@yandex.ru",
    img: <EmailIcon />,
    link: "mailto:o-v-nagaeva1987@yandex.ru?subject=Сообщение%20с%20сайта%20https://www.podoarta.space/&body=Здравствуйте!%0D%0A%0D%0A",
  },
];

export const solineLink =
  "https://profsalon.org/online/ros_podoarta/?back_url=http%3A%2F%2Fwww.podoarta.space%2F&source=100&employees=&skip_places=false";

export const yandexLink =
  "https://yandex.kz/maps/ru/org/podoarta/210589391248/?indoorLevel=1&lang=ru&ll=37.601340%2C55.780639&z=17";
