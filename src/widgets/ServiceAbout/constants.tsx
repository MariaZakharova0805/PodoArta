import { v1 as uuidv1 } from "uuid";
import { Podology } from "./ServiciesList/Podology";
import { GrowIn } from "./ServiciesList/GrowIn";
import { CorrectionSystem } from "./ServiciesList/CorrectionSystem";
import { Ortozy } from "./ServiciesList/Ortozy";
import { Manicure } from "./ServiciesList/Manicure";
import { Vpch } from "./ServiciesList/Vpch";

import pogology1 from "../../../public/img/servecies/podology/1.jpg";
import pogology2 from "../../../public/img/servecies/podology/2.jpg";
import pogology3 from "../../../public/img/servecies/podology/3.jpg";
import pogology4 from "../../../public/img/servecies/podology/4.jpg";
import pogology5 from "../../../public/img/servecies/podology/5.jpg";
import pogology6 from "../../../public/img/servecies/podology/6.jpg";
import pogology7 from "../../../public/img/servecies/podology/7.jpg";
import pogology8 from "../../../public/img/servecies/podology/8.jpg";
import pogology9 from "../../../public/img/servecies/podology/9.jpg";
import pogology10 from "../../../public/img/servecies/podology/10.jpg";
import pogology11 from "../../../public/img/servecies/podology/11.jpg";
import pogology12 from "../../../public/img/servecies/podology/12.jpg";

import growIn1 from "../../../public/img/servecies/growIn/1.jpg";
import growIn2 from "../../../public/img/servecies/growIn/2.jpg";
import growIn3 from "../../../public/img/servecies/growIn/3.jpg";
import growIn5 from "../../../public/img/servecies/growIn/5.jpg";
import growIn6 from "../../../public/img/servecies/growIn/6.jpg";
import growIn7 from "../../../public/img/servecies/growIn/7.jpg";
import growIn8 from "../../../public/img/servecies/growIn/8.jpg";

import correction1 from "../../../public/img/servecies/correctionSystem/1.jpg";
import correction2 from "../../../public/img/servecies/correctionSystem/2.jpg";
import correction3 from "../../../public/img/servecies/correctionSystem/3.jpg";
import correction4 from "../../../public/img/servecies/correctionSystem/4.jpg";
import correction5 from "../../../public/img/servecies/correctionSystem/5.jpg";
import correction6 from "../../../public/img/servecies/correctionSystem/6.jpg";
import correction7 from "../../../public/img/servecies/correctionSystem/7.jpg";

import ortozy1 from "../../../public/img/servecies/ortozy/1.jpg";
import ortozy2 from "../../../public/img/servecies/ortozy/2.jpg";
import ortozy3 from "../../../public/img/servecies/ortozy/3.jpg";

import manicure1 from "../../../public/img/servecies/manicure/1.jpg";
import manicure2 from "../../../public/img/servecies/manicure/2.jpg";
import manicure3 from "../../../public/img/servecies/manicure/3.jpg";
import manicure4 from "../../../public/img/servecies/manicure/4.jpg";
import manicure5 from "../../../public/img/servecies/manicure/5.jpg";
import manicure6 from "../../../public/img/servecies/manicure/6.jpg";
import manicure7 from "../../../public/img/servecies/manicure/7.jpg";
import manicure8 from "../../../public/img/servecies/manicure/8.jpg";
import manicure9 from "../../../public/img/servecies/manicure/9.jpg";
import manicure10 from "../../../public/img/servecies/manicure/10.jpg";
import manicure11 from "../../../public/img/servecies/manicure/11.jpg";
import manicure12 from "../../../public/img/servecies/manicure/12.jpg";
import manicure13 from "../../../public/img/servecies/manicure/13.jpg";
import manicure14 from "../../../public/img/servecies/manicure/14.jpg";

export const servicies = [
  {
    id: uuidv1(),
    category: "podology",
    name: "Педикюр",
    description: <Podology />,
  },
  {
    id: uuidv1(),
    category: "growin_correction",
    name: "Коррекция врастания ногтей",
    description: <GrowIn />,
  },
  {
    id: uuidv1(),
    category: "correction_systems",
    name: "Коррекционные системы",
    description: <CorrectionSystem />,
  },
  {
    id: uuidv1(),
    category: "ortozy",
    name: "Ортозы",
    description: <Ortozy />,
  },
  {
    id: uuidv1(),
    category: "vpch_correction",
    name: "Обработка ВПЧ",
    description: <Vpch />,
  },
  {
    id: uuidv1(),
    category: "manicure",
    name: "Маникюр",
    description: <Manicure />,
  },
];

export const listPodology = [
  "мозоли, натопныши, гиперкератоз",
  "трещины и сухость",
  "деформации и врастания ногтевой пластины",
  "чрезмерное потоотделение и запах",
  "грибковые заболевания кожи стоп и ногтей",
];

export const imagesPogology = [
  {
    id: uuidv1(),
    image: pogology1,
    imageSM: pogology1,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology2,
    imageSM: pogology2,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology3,
    imageSM: pogology3,
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
    image: pogology5,
    imageSM: pogology5,
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
    image: pogology7,
    imageSM: pogology7,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology8,
    imageSM: pogology8,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology9,
    imageSM: pogology9,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology10,
    imageSM: pogology10,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology11,
    imageSM: pogology11,
    placeholder: "подология",
  },
  {
    id: uuidv1(),
    image: pogology12,
    imageSM: pogology12,
    placeholder: "подология",
  },
];

export const imagesGrowIn = [
  {
    id: uuidv1(),
    image: growIn1,
    imageSM: growIn1,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn2,
    imageSM: growIn2,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn3,
    imageSM: growIn3,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn5,
    imageSM: growIn5,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn6,
    imageSM: growIn6,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn7,
    imageSM: growIn7,
    placeholder: "Коррекция врастания ногтей",
  },
  {
    id: uuidv1(),
    image: growIn8,
    imageSM: growIn8,
    placeholder: "Коррекция врастания ногтей",
  },
];

export const correctionSystems = [
  {
    id: uuidv1(),
    image: correction1,
    imageSM: correction1,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: correction2,
    imageSM: correction2,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: correction3,
    imageSM: correction3,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: correction4,
    imageSM: correction4,
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
    image: correction6,
    imageSM: correction6,
    placeholder: "Коррекционные системы",
  },
  {
    id: uuidv1(),
    image: correction7,
    imageSM: correction7,
    placeholder: "Коррекционные системы",
  },
];

export const imagesOrtozy = [
  {
    id: uuidv1(),
    image: ortozy1,
    imageSM: ortozy1,
    placeholder: "Межпальцевые разделители(Ортозы)",
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

export const imagesManicure = [
  {
    id: uuidv1(),
    image: manicure1,
    imageSM: manicure1,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure2,
    imageSM: manicure2,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure3,
    imageSM: manicure3,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure4,
    imageSM: manicure4,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure5,
    imageSM: manicure5,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure6,
    imageSM: manicure6,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure7,
    imageSM: manicure7,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure7,
    imageSM: manicure7,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure8,
    imageSM: manicure8,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure9,
    imageSM: manicure9,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure10,
    imageSM: manicure10,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure11,
    imageSM: manicure11,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure12,
    imageSM: manicure12,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure13,
    imageSM: manicure13,
    placeholder: "Маникюр",
  },
  {
    id: uuidv1(),
    image: manicure14,
    imageSM: manicure14,
    placeholder: "Маникюр",
  },
];
