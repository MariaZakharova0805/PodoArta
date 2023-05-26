import { v1 as uuidv1 } from "uuid";
import pogology1 from "../../../public/img/servecies/podology/1.jpg";
import pogology4 from "../../../public/img/servecies/podology/4.jpg";
import pogology6 from "../../../public/img/servecies/podology/6.jpg";

import growIn8 from "../../../public/img/servecies/growIn/8.jpg";

import correction3 from "../../../public/img/servecies/correctionSystem/3.jpg";
import correction5 from "../../../public/img/servecies/correctionSystem/5.jpg";

import ortozy2 from "../../../public/img/servecies/ortozy/2.jpg";
import ortozy3 from "../../../public/img/servecies/ortozy/3.jpg";

export const images = [
  {
    id: uuidv1(),
    image: pogology1,
    imageSM: pogology1,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology4,
    imageSM: pogology4,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology6,
    imageSM: pogology6,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: growIn8,
    imageSM: growIn8,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: correction3,
    imageSM: correction3,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: correction5,
    imageSM: correction5,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: ortozy2,
    imageSM: ortozy2,
    placeholder: "Межпальцевые разделители(Ортозы)",
  },
  {
    id: uuidv1(),
    image: ortozy3,
    imageSM: ortozy3,
    placeholder: "Межпальцевые разделители(Ортозы)",
  },
];
