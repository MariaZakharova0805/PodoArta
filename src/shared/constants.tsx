import { v1 as uuidv1 } from "uuid";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

export const contacts = [
  {
    id: uuidv1(),
    title: "Телефон",
    details: "+7 (999) 874 78 11",
    img: <PhoneInTalkIcon />,
    link: "tel:+79998747811",
  },
  {
    id: uuidv1(),
    title: "г.Москва",
    details: "м.Проспект мира, Слесарный переулок,5",
    img: <RoomIcon />,
    link: "https://yandex.kz/maps/ru/-/CDVAQ6Jb",
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
  "https://yandex.ru/maps/213/moscow/?ll=37.598928%2C55.782590&mode=poi&poi%5Bpoint%5D=37.601401%2C55.780634&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D210589391248&utm_source=share&z=19";
