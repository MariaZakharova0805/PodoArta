import { create } from "zustand";
import { v1 as uuidv1 } from "uuid";
import {
  INavBarLinks,
  IServecies,
  IFeedback,
  ISlogan,
  ICategories,
  ICabinetImage,
  ISertificates,
} from "./inteface";
import advantage from "../../public/icons/advantage.svg";
import experinece from "../../public/icons/experinece.svg";
import care from "../../public/icons/care.svg";
import mainImg from "../../public/img/main.png";
import mainImgSm from "../../public/img/mainSM.png";
//Images for servecies
import pogology from "../../public/img/servecies/podology.jpg";
import growin from "../../public/img/servecies/growin.jpg";
import zto from "../../public/img/servecies/zto.jpg";
import vpch from "../../public/img/servecies/vpch.jpg";
import ortozy from "../../public/img/servecies/ortozy.jpg";
import manicure from "../../public/img/servecies/manicure.jpg";
//Images of cabinet
import cab1 from "../../public/img/cabinet/cab1.jpg";
import cab1SM from "../../public/img/cabinet/cab1.jpg";
import cab3 from "../../public/img/cabinet/cab3.jpg";
import cab3SM from "../../public/img/cabinet/cab3.jpg";
import cab4 from "../../public/img/cabinet/cab4.jpg";
import cab4SM from "../../public/img/cabinet/cab4.jpg";
import cab5 from "../../public/img/cabinet/cab5.jpg";
import cab5SM from "../../public/img/cabinet/cab5.jpg";
import cab6 from "../../public/img/cabinet/cab6.jpg";
import cab6SM from "../../public/img/cabinet/cab6.jpg";
import cab7 from "../../public/img/cabinet/cab7.jpg";
import cab7SM from "../../public/img/cabinet/cab7.jpg";
import cab8 from "../../public/img/cabinet/cab8.jpg";
import cab8SM from "../../public/img/cabinet/cab8.jpg";
import cab9 from "../../public/img/cabinet/cab9.jpg";
import cab9SM from "../../public/img/cabinet/cab9.jpg";
import cab10 from "../../public/img/cabinet/cab10.jpg";
import cab10SM from "../../public/img/cabinet/cab10.jpg";
import cab12 from "../../public/img/cabinet/cab12.jpg";
import cab12SM from "../../public/img/cabinet/cab12.jpg";
import cab13 from "../../public/img/cabinet/cab13.jpg";
import cab13SM from "../../public/img/cabinet/cab13.jpg";
import cab14 from "../../public/img/cabinet/cab14.jpg";
import cab14SM from "../../public/img/cabinet/cab14.jpg";
import cab15 from "../../public/img/cabinet/cab15.jpg";
import cab15SM from "../../public/img/cabinet/cab15.jpg";
import cab16 from "../../public/img/cabinet/cab16.jpg";
import cab16SM from "../../public/img/cabinet/cab16.jpg";
//Images of sertificates
import sert0 from "../../public/img/documents/sertificate.jpg";
import sert0_sm from "../../public/img/documents/sertificate_sm.jpg";
import sert1 from "../../public/img/documents/sert1.jpg";
import sert1_sm from "../../public/img/documents/sert1_sm.jpg";
import sert2 from "../../public/img/documents/sert2.jpg";
import sert2_sm from "../../public/img/documents/sert1_sm.jpg";
import sert3 from "../../public/img/documents/sert3.jpg";
import sert3_sm from "../../public/img/documents/sert3_sm.jpg";
import sert4 from "../../public/img/documents/sert4.jpg";
import sert4_sm from "../../public/img/documents/sert4_sm.jpg";
import sert5 from "../../public/img/documents/sert5.jpg";
import sert5_sm from "../../public/img/documents/sert5_sm.jpg";
import { solineLink } from "./constants";
import { yearsPassed } from "./getDate";

//NavBar
type NavBarLinks = {
  links: INavBarLinks[];
};
export const NavBarLinks = create<NavBarLinks>(() => ({
  links: [
    { id: uuidv1(), name: "Главная", link: "/" },
    { id: uuidv1(), name: "О центре", link: "/about" },
    { id: uuidv1(), name: "Услуги", link: "/servecies" },
    { id: uuidv1(), name: "Наши работы", link: "/gallery" },
    { id: uuidv1(), name: "Контакты", link: "/contacts" },
  ],
}));

//Cabinet Images fro slider
type CabinetImages = { cabImg: ICabinetImage[] };
export const useCabinetImages = create<CabinetImages>(() => ({
  cabImg: [
    {
      id: uuidv1(),
      image: cab1,
      imageSM: cab1SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab3,
      imageSM: cab3SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab4,
      imageSM: cab4SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab5,
      imageSM: cab5SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab6,
      imageSM: cab6SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab7,
      imageSM: cab7SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab8,
      imageSM: cab8SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab9,
      imageSM: cab9SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab10,
      imageSM: cab10SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab12,
      imageSM: cab12SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab13,
      imageSM: cab13SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab14,
      imageSM: cab14SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab15,
      imageSM: cab15SM,
      placeholder: "кабинет",
    },
    {
      id: uuidv1(),
      image: cab16,
      imageSM: cab16SM,
      placeholder: "кабинет",
    },
  ],
}));

// Main page text
type Texts = { mainPageText: string[]; mainImg: string; mainImgSm: string };
export const useTexts = create<Texts>(() => ({
  mainPageText: [
    "Знаем все о здоровье ваших стоп",
    "Сотрудничаем с врачами",
    "Персональный подход к каждому клиенту",
  ],
  mainImg: mainImg,
  mainImgSm: mainImgSm,
}));

// FeedBacks block
type useFeedbacks = { feedbacks: IFeedback[] };
export const useFeedbacks = create<useFeedbacks>(() => ({
  feedbacks: [
    {
      id: uuidv1(),
      rating: 5,
      nickname: "Анастасия",
      service: [
        { id: uuidv1(), name: "педикюр", link: "podology" },
        {
          id: uuidv1(),
          name: "коррекция врастания ногтей",
          link: "growin_correction",
        },
      ],
      text: "Это лучший мастер, который случался со мной и моим мужем. Ехали из Архангельска специально к Ольге (у меня и мужа проблема вросших ногтей)! Тот момент, когда ты уверен в работе человека на все 100% и готов приехать куда угодно. С моей придирчивостью за счастье найти золотые руки и качество услуг.",
      specialist: "Нагава Ольга Владимировна",
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/210589391248/reviews?reviews[publicId]=mydxvynaz8a1hqe6qvgezgyrf0&utm_source=review",
      mainPage: false,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: "Ксения К.",
      service: [{ id: uuidv1(), name: "педикюр", link: "podology" }],
      text: "Найти «своего» мастера педикюра достаточно сложно - то выпиливают ногти, то стирают до дыр пятки! Но мне повезло- я нашла Ольгу!! Профессионал с легкими руками, ненавязчивыми советами по правильному домашнему уходу, максимально аккуратно и бережно обрабатывает стопы и пальцы -и, вуаля...",
      specialist: "Нагава Ольга Владимировна",
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/210589391248/reviews?reviews[publicId]=jxp68j1zqqwapnjew377w6v5y8&utm_source=review",
      mainPage: true,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: "Мария К.",
      service: [
        { id: uuidv1(), name: "педикюр", link: "podology" },
        { id: uuidv1(), name: "маниюкр", link: "manicure" },
      ],
      text: "Нас с Олей свела судьба😊 совершенно случайно. Была в поисках идеального мастера год и вот я счастливый клиент этой замечательной девушки уже почти 2 года. Золотые руки! Всегда оооочень аккуратно, красиво, со вкусом, учитывает любые пожелания клиента, работает на совесть...",
      specialist: "Нагава Ольга Владимировна",
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/210589391248/reviews?reviews[publicId]=15xxfkjy8ctgqb8vj0wvqjnq1g&utm_source=review",
      mainPage: true,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: "Кристина C.",
      service: [
        { id: uuidv1(), name: "педикюр", link: "podology" },
        { id: uuidv1(), name: "маниюкр", link: "manicure" },
      ],
      text: "Считаю себя довольно требовательным клиентом к качеству исполнения работ по маникюру и педикюру, но Оле я всегда полностью доверяю без желания контролировать ее работу. Она отличный специалист, который знает свое свое дело. Делает все максимально качественно!",
      specialist: "Нагава Ольга Владимировна",
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/210589391248/reviews?reviews[publicId]=5vnx8xbp4n4u9dqy4w3qphw7gg&utm_source=review",
      mainPage: false,
    },
  ],
}));

// Company Slogan
type Slogan = { slogans: ISlogan[] };
export const useSlogan = create<Slogan>(() => ({
  slogans: [
    {
      id: uuidv1(),
      name: "Доверие",
      text: "Всегда на первом месте. Объясняем причины проблемы и способы исправить.",
      icon: <img src={experinece} />,
    },
    {
      id: uuidv1(),
      name: `${yearsPassed} лет`,
      text: "Заботимся о здоровье взрослых и детей.",
      icon: <img src={care} />,
    },
    {
      id: uuidv1(),
      name: "Специалисты",
      text: "Высокого уровня с огромным стажем.",
      icon: <img src={advantage} />,
    },
  ],
}));

// Servecies info
type Servecies = {
  servecies: IServecies[];
  categories: ICategories[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
};

export const useServecies = create<Servecies>((set) => ({
  //категории для кнопок-фильтрации услуг
  activeCategory: "all",
  setActiveCategory: (cat) => set(() => ({ activeCategory: cat })),
  categories: [
    { id: uuidv1(), name: "Все услуги", category: "all", active: true },
    {
      id: uuidv1(),
      name: "Педикюр",
      category: "podology",
      active: false,
      img: pogology,
    },
    {
      id: uuidv1(),
      name: "Коррекция врастания ногтей",
      category: "growin_correction",
      active: false,
      img: growin,
    },
    {
      id: uuidv1(),
      name: "Коррекционные системы",
      details: "Титановая нить, 3ТО, Фрезера",
      category: "correction_systems",
      active: false,
      img: zto,
    },
    {
      id: uuidv1(),
      name: "Обработка ВПЧ",
      details: "бородавка/шипица",
      category: "vpch_correction",
      active: false,
      img: vpch,
    },
    {
      id: uuidv1(),
      name: "Ортозы",
      category: "ortozy",
      active: false,
      img: ortozy,
    },
    {
      id: uuidv1(),
      name: "Маникюр",
      category: "manicure",
      active: false,
      img: manicure,
    },
  ],

  servecies: [
    //podology Подология
    {
      id: uuidv1(),
      name: "Консультация подолога",
      popular: false,
      price: 1200,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Сбор материала на анализ",
      popular: false,
      price: 500,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Препаратный педикюр КАРТ(Израиль)",
      popular: false,
      price: 4500,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Педикюр гигиенический",
      popular: false,
      price: 2500,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Педикюр подологический",
      popular: false,
      price: 4000,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка пальцев без стопы гигиеническая",
      popular: true,
      price: 2000,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка пальцев без стопы подологическая",
      popular: false,
      price: 2800,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка стоп без пальцев подологическая",
      popular: false,
      price: 2800,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка диабетической стопы",
      popular: false,
      price: 5500,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Подстригание и форма ногтей",
      popular: false,
      price: 1500,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Протезирование ногтевой пластины",
      popular: false,
      price: 1000,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка стержневой мозоли",
      popular: false,
      price: 1000,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Покрытие гель-лак",
      popular: true,
      price: 1000,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Покрытие лак",
      popular: false,
      price: 600,
      category: "podology",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Снятие покрытия гель-лак",
      popular: false,
      price: 300,
      category: "podology",
      link: solineLink,
    },
 
    // growin_correction Коррекция врастания ногтей
    {
      id: uuidv1(),
      name: "Коррекция вросшего ногтя I стадия (1 угол)",
      popular: false,
      price: 2000,
      category: "growin_correction",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Коррекция вросшего ногтя II и III стадия (1 угол)",
      popular: false,
      price: 4000,
      category: "growin_correction",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Плановый осмотр с наложением повязки",
      popular: false,
      price: 1500,
      category: "growin_correction",
      link: solineLink,
    },
    // correction_systems Коррекционныая система титановая нить
    {
      id: uuidv1(),
      name: "Титановая нить. Установка первичная на 1 ноготь",
      popular: false,
      price: 3800,
      category: "correction_systems",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Титановая нить.  Установка первичная на 2 ногтя",
      popular: false,
      price: 6000,
      category: "correction_systems",
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299047",
    },
    {
      id: uuidv1(),
      name: "Титановая нить. Установка повторная на 1 ноготь",
      popular: false,
      price: 2250,
      category: "correction_systems",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Титановая нить. Установка повторная на 2 ногтя",
      popular: false,
      price: 4500,
      category: "correction_systems",
      link: solineLink,
    },

    // correction_systems Коррекционныая система ЗТО
    {
      id: uuidv1(),
      name: "ЗТО. Установка первичная на 1 ноготь",
      popular: false,
      price: 6000,
      category: "correction_systems",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "ЗТО. Установка первичная на 2 ногтя",
      popular: false,
      price: 12000,
      category: "correction_systems",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "ЗТО. Установка повторная на 1 ноготь",
      popular: false,
      price: 4500,
      category: "correction_systems",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "ЗТО. Установка первичная на 2 ногтя",
      popular: false,
      price: 9000,
      category: "correction_systems",
      link: solineLink,
    },
    // vpch_correction Обработка ВПЧ (бородавка\шипица)
    {
      id: uuidv1(),
      name: "Обработка ВПЧ 1 еденицы",
      popular: false,
      price: 1500,
      category: "vpch_correction",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка ВПЧ 3-5 едениц",
      popular: false,
      price: 2000,
      category: "vpch_correction",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Обработка ВПЧ более 6 едениц",
      popular: false,
      price: 2500,
      category: "vpch_correction",
      link: solineLink,
    },
    //  ortozy Ортозы
    {
      id: uuidv1(),
      name: "Изготовление индивидуальных ортозов",
      popular: false,
      price: 200,
      category: "ortozy",
      link: solineLink,
    },
    //manicure МАНИКЮР
    {
      id: uuidv1(),
      name: "Маникюр гигиенический",
      popular: false,
      price: 1600,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Маникюр подологический",
      popular: false,
      price: 2500,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Маникюр с покрытием гель-лак",
      popular: false,
      price: 2500,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Наращивание ногтей",
      popular: false,
      price: 4000,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Коррекция наращенных ногтей",
      popular: false,
      price: 3500,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Снятие покрытия полное с маникюром",
      popular: false,
      price: 2000,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Снятие покрытия полное",
      popular: false,
      price: 700,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Дизайн френч",
      popular: false,
      price: 500,
      category: "manicure",
      link: solineLink,
    },
    {
      id: uuidv1(),
      name: "Дизайн легкий",
      popular: false,
      price: 500,
      category: "manicure",
      link: solineLink,
    },
  ],
}));

//About page text
type ServeciesTexts = {
  servecies: string[];
};
export const useAbout = create<ServeciesTexts>(() => ({
  servecies: [
    "натоптыши, мозоли, бородавки и трещины на стопах",
    "грибковые и бактериальные инфекции",
    "деформация ногтей и исправление их формы",
    "патологии ногтевого аппарата",
    "профессиональный уход за стопами при псориазе, экземе и сахарном диабете",
    "излишняя потливость стоп и гиперкератоз",
  ],
}));

type Sertificates = { sertificates: ISertificates[] };
export const useSertificates = create<Sertificates>(() => ({
  sertificates: [
    {
      id: uuidv1(),
      image: sert0,
      imageSM: sert0_sm,
      alt: "Сертификат онихолизиц, протезрование ногтевой пластины",
    },
    {
      id: uuidv1(),
      image: sert1,
      imageSM: sert1_sm,
      alt: "Сертификат SMART мастер",
    },
    {
      id: uuidv1(),
      image: sert2,
      imageSM: sert2_sm,
      alt: "Сертификат врозший ноготь",
    },
    {
      id: uuidv1(),
      image: sert3,
      imageSM: sert3_sm,
      alt: "Сертификат SMART мастер",
    },
    {
      id: uuidv1(),
      image: sert4,
      imageSM: sert4_sm,
      alt: "Сертификат PodiaFarm",
    },
    {
      id: uuidv1(),
      image: sert5,
      imageSM: sert5_sm,
      alt: "Сертификат медицинский педикюр",
    },
  ],
}));
