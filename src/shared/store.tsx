import { create } from "zustand";
import { ReactNode } from "react";
import uuid from "react-uuid";
import img1 from "../../public/img/stuff/Olga1.jpg"
import img2 from "../../public/img/stuff/Olga2.jpg"
import diploma from "../../public/img/stuff/diploma.jpg"
import clear from "../../public/img/servecies/clear.jpg"
import feet from "../../public/img/servecies/feet.jpg"
import { SvgComponent } from "./HomeSvgElector/SvgComponent";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import { IClientData } from "./inteface";

//FeedBackForm
type FeedBack = {
  clientData?: IClientData[],
  setClientData: (clientData: IClientData[]) => void,

  visible: boolean
  setVisible: (visible: boolean) => void,
}

export const useFeedBackForm = create<FeedBack>((set) => ({
  clientData: [],
  setClientData: data => set({ clientData: data }),

  visible: false,
  setVisible: visibility => set({ visible: visibility }),
}))



// Отзывы
export interface IFeedback {
  id: string,
  rating: number,
  nickname: string,
  service: string,
  text: string,
  specialist: string,
  specialistParam: string,
}

type useFeedbacks = { feedbacks: IFeedback[] }

export const useFeedbacks = create<useFeedbacks>(() => ({
  feedbacks: [
    {
      id: uuid(),
      rating: 4,
      nickname: 'Иванов Иван Иванович',
      service: 'service1',
      text: "все хорошо, конфеты слишком сладкие, а солнце слишком ярко светит",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
    },
    {
      id: uuid(),
      rating: 5,
      nickname: 'Петров Петр Петрович',
      service: 'service2',
      text: "отличная работа",
      specialist: 'Ольговая Ольга Ольговна',
      specialistParam: "Olgovaya_O",
    },
    {
      id: uuid(),
      rating: 5,
      nickname: 'Пупкин Иван Иванович',
      service: 'service3',
      text: "отличная работа",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
    },
    {
      id: uuid(),
      rating: 4,
      nickname: 'Сидоров Сидор Сидорович',
      service: 'service4',
      text: "все понравилось",
      specialist: 'Ольговая Ольга Ольговна',
      specialistParam: "Olgovaya_O",
    },

  ]
}))

// Контакты
export interface IContacts {
  id: string;
  title: string;
  details: string;
  img: ReactNode;
  link?: string;
}

type Contacts = { contacts: IContacts[] }

export const useContacts = create<Contacts>(() => ({
  contacts: [
    {
      id: uuid(),
      title: 'Телефон',
      details: '+7 999 874 7811',
      img: <PhoneInTalkIcon />,
      link: 'tel:+79998747811',
    },
    {
      id: uuid(),
      title: 'г.Москва',
      details: 'ул.Пушкина д.2, 2й этаж, оф.2',
      img: <RoomIcon />,
      link: 'https://yandex.kz/maps/-/CCUk7LUhLB',
    },
    {
      id: uuid(),
      title: 'Режим работы:',
      details: 'ПН - ВС: с 10.00 - 22.00',
      img: <AccessTimeIcon />,
    },
    {
      id: uuid(),
      title: 'E-mail:',
      details: 'test@test.ru',
      img: <EmailIcon />,
      link: 'mailto:atest@test.ru',
    }
  ]
}))


// Слоган компании
export interface ISlogan {
  id: string;
  name: string;
  text: string;
  icon: ReactNode;
}

type Slogan = { slogans: ISlogan[] }

export const useSlogan = create<Slogan>(() => ({
  slogans: [
    {
      id: uuid(),
      name: "Ценим доверие",
      text: "Объясняем диагнозы и схему лечения, пишем разборчиво",
      icon: <SvgComponent id={"advantage"} />
    },
    {
      id: uuid(),
      name: "5 лет",
      text: "Заботимся о здоровье взрослых и детей",
      icon: <SvgComponent id={"experience"} />
    },
    {
      id: uuid(),
      name: "Специалисты",
      text: "Высокого уровня с огромным стажем",
      icon: <SvgComponent id={"health"} />
    },
  ]
}))

// Информация об услугах
export interface ICategories {
  id: string;
  name: string;
  category: string;
  active: boolean;
}

export interface IServecies {
  id: string;
  name: string;
  param: string;
  about: string;
  imgMain: string;
  img: string[];
  popular?: boolean;
  price: number | string;
  category: string;
}

type Servecies = {
  servecies: IServecies[];
  categories: ICategories[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void
}

export const useServecies = create<Servecies>((set) => ({
  //категории для кнопок-фильтрации услуг
  activeCategory: 'all',
  setActiveCategory: (cat) => set(() => ({ activeCategory: cat })),
  categories: [
    { id: uuid(), name: "Все услуги", category: 'all', active: false },
    { id: uuid(), name: "Эстетический педикюр", category: 'estetic_podology', active: false },
    { id: uuid(), name: "Подологический маникюр", category: 'podology_manicure', active: false },
    { id: uuid(), name: "Подологический педикюр стопы", category: 'podology_pedicur_feet', active: false },
    { id: uuid(), name: "Подологическая обработка ноги", category: 'podology_feet_work', active: false },
    { id: uuid(), name: "Титановая нить", category: 'titan_string', active: false },
    { id: uuid(), name: "Коррекционная система 3ТО", category: 'zto-correction', active: false },
    { id: uuid(), name: "Обработка ВПЧ (бородавка/шипица)", category: 'vpch_correction', active: false },
    { id: uuid(), name: "Ортозы", category: 'ortozy', active: false },
    { id: uuid(), name: "Эстетический маникюр", category: 'estetic_manicure', active: false },
  ],

  servecies: [
    //podology_manicure Подологический маникюр
    {
      id: uuid(),
      name: 'Обработка всех ногтевых пластин',
      param: "Obrabotka-vsekh-nogtevyh-plastin",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 2000,
      category: 'podology_manicure'
    },
    {
      id: uuid(),
      name: 'Обработка 1 ногтевой пластины',
      param: "Obrabotka-1-nogtevoj-plastiny",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 500,
      category: 'podology_manicure'
    },
    //estetic_podology стетический педикюр
    {
      id: uuid(),
      name: 'Препаратный педикюр КАРТ',
      param: "Preparatnyj-pedikyur-KART",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: feet,
      img: [clear, clear, clear, clear, clear],
      popular: true,
      price: 3000,
      category: 'estetic_podology'
    },
    {
      id: uuid(),
      name: 'Комплексня обработка стоп и ногтей',
      param: "Kompleksnya-obrabotka-stop-i-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: feet,
      img: [clear, clear, clear],
      popular: true,
      price: 2500,
      category: 'estetic_podology'
    },
    {
      id: uuid(),
      name: 'Обработка пальцев без стопы',
      param: "Obrabotka-palcev-bez-stopy",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: true,
      price: 1800,
      category: 'estetic_podology'
    },
    {
      id: uuid(),
      name: 'Покрытие гель-лак',
      param: "Pokrytie-gel-lak",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: true,
      price: 1000,
      category: 'estetic_podology'
    },
    {
      id: uuid(),
      name: 'Покрытие лак',
      param: "Pokrytie-lak",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 600,
      category: 'estetic_podology'
    },
    {
      id: uuid(),
      name: 'Снятие покрытия',
      param: "Snyatie-pokrytiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 300,
      category: 'estetic_podology'
    },
    //podology_pedicur_feet Подологический педикюр СТОПЫ
    {
      id: uuid(),
      name: 'Консультация подолога',
      param: "Konsultaciya-podologa",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 700,
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Педикюр I степени сложности',
      param: "Pedikyur-I-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3000,
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Педикюр II степени сложности',
      param: "Pedikyur-II-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3500,
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Педикюр III степени сложности',
      param: "Pedikyur-III-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 4000,
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Обработка стоп подологическая',
      param: "Obrabotka-stop-podologicheskaya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 2500,
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Обработка трещин с наложением рагрузки',
      param: "Obrabotka treshchin s nalozheniem ragruzki",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 'от 500',
      category: 'podology_pedicur_feet'
    },
    {
      id: uuid(),
      name: 'Разгрузка на стопу',
      param: "Razgruzka na stopu",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 'от 350',
      category: 'podology_pedicur_feet'
    },
    //podology_feet_work Подологическая обработа НОГТИ
    {
      id: uuid(),
      name: 'Обработка пальцев подологическая',
      param: "Obrabotka-palcev-podologicheskaya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 2500,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Протезирование ногтевой пластины бол. палец',
      param: "Protezirovanie-nogtevoj-plastiny-bol.palec",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: "от 1500",
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Обработка стержневой мозоли с разгрузкой\повязкой',
      param: "Obrabotka-sterzhnevoj-mozoli-s-razgruzkoj-povyazkoj",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 700,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Коррекция вросшего ногтя I стадия',
      param: "Korrekciya-vrosshego-nogtya-I-stadiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1000,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Коррекция вросшего ногтя I стадия',
      param: "Korrekciya-vrosshego-nogtya-I-stadiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1000,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Коррекция вросшего ногтя II и III стадия',
      param: "Korrekciya-vrosshego-nogtya-II-III-stadiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1500,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Плановый осмотр и повязка',
      param: "Planovyj-osmotr-i-povyazka",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 500,
      category: 'podology_feet_work'
    },
    {
      id: uuid(),
      name: 'Тампонирование',
      param: "Tamponirovanie",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 'от 350',
      category: 'podology_feet_work'
    },
    // titan_string Коррекционная система Титановая нить
    {
      id: uuid(),
      name: 'Установка первичная Титановой нити на 1 ноготь',
      param: "Ustanovka-pervichnaya-Titanovoj-niti-na-1-nogot'",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3000,
      category: 'titan_string'
    },
    {
      id: uuid(),
      name: 'Установка первичная Титановой нити на 2 ноготя',
      param: "Ustanovka-pervichnaya-Titanovoj-niti-na-2-nogtya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 5000,
      category: 'titan_string'
    },
    {
      id: uuid(),
      name: 'Коррекция Титановой нити на 1 ноготь',
      param: "Korrekciya-Titanovoj-niti-na-1-nogot",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 2000,
      category: 'titan_string'
    },
    {
      id: uuid(),
      name: 'Коррекция Титановой нити на 2 ноготя',
      param: "Korrekciya-Titanovoj-niti-na-2-nogtya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3500,
      category: 'titan_string'
    },
    //Коррекционная система 3ТО 'zto_correction' Коррекционная система 3ТО
    {
      id: uuid(),
      name: 'Установка первичная на 1 ноготь',
      param: "Ustanovka-pervichnaya-na-1-nogot-ZTO",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 4000,
      category: 'zto-correction'
    },
    {
      id: uuid(),
      name: 'Установка первичная на 2 ноготя',
      param: "Ustanovka-pervichnaya-na-2-nogtya-ZTO",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 4000,
      category: 'zto-correction'
    },
    {
      id: uuid(),
      name: 'Установка первичная на 2 ноготя',
      param: "Ustanovka-pervichnaya-na-2-nogtya-ZTO",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 6000,
      category: 'zto-correction'
    },
    {
      id: uuid(),
      name: 'Коррекция скобы 3ТО на 1 ноготь',
      param: "Korrekciya-skoby-3TO-na-1-nogot",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3000,
      category: 'zto-correction'
    },
    {
      id: uuid(),
      name: 'Коррекция скобы 3ТО на 2 ноготя',
      param: "Korrekciya-skoby-3TO-na-2-nogtya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 4500,
      category: 'zto-correction'
    },
    //vpch_correction Обработка ВПЧ (бородавка\шипица)
    {
      id: uuid(),
      name: 'Обработка ВПЧ 1-3 шт.',
      param: "Obrabotka-VPCH-1-3-sht",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1000,
      category: 'vpch_correction'
    },
    {
      id: uuid(),
      name: 'Обработка ВПЧ 3-5 шт.',
      param: "Obrabotka-VPCH-3-5-sht",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1300,
      category: 'vpch_correction'
    },
    {
      id: uuid(),
      name: 'Обработка ВПЧ 5 и более шт.',
      param: "Obrabotka-VPCH-5-i-bolee-sh",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 1800,
      category: 'vpch_correction'
    },
    //ortozy  Ортозы
    {
      id: uuid(),
      name: 'Изготовление индивидуальных ортозов',
      param: "Izgotovlenie-individualnyh-ortozov",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: "от 500",
      category: 'ortozy'
    },
    //estetic_manicure Эстетический маникюр
    {
      id: uuid(),
      name: 'Мужской маникюр ´без лишних глаз´',
      param: "Muzhskoj-manikyur-bez-lishnih-glaz",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '900-1300',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Маникюр гигиенический',
      param: "Manikyur-gigienicheskij",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '900-1300',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Маникюр с покрытием гель-лак',
      param: "Manikyur-s-pokrytiem-gel-lak",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '1700-2200',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Снятие гель-лака в процедуре',
      param: "Snyatie-gel-laka-v-procedure",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '200-300',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Снятие гель-лака без покрытия',
      param: "Snyatie-gel-laka-bez-pokrytiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 700,
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Укрепление ногтей акриловой пудрой',
      param: "Ukreplenie-nogtej-akrilovoj-pudroj",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 300,
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Укрепление ногтей гелем',
      param: "Ukreplenie-nogtej-gelem",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '400-500',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Укрепление ногтей гелем',
      param: "Ukreplenie-nogtej-poligelem",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '500-700',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Наращивание ногтей',
      param: "Narashchivanie-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 4000,
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Коррекция наращенных ногтей',
      param: "Korrekciya-narashchennyh-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 3500,
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Дизайн ногтей',
      param: "Dizajn-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 'от 300',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Дизайн Френч',
      param: "Dizajn-french",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: '400-500',
      category: 'estetic_manicure'
    },
    {
      id: uuid(),
      name: 'Ремонт, донаращивание 1 ногтя',
      param: "Remont-donarashchivanie-1-nogtya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      imgMain: clear,
      img: [clear, clear, clear],
      popular: false,
      price: 200,
      category: 'estetic_manicure'
    },
  ]
}))

// Информация о специалистах
export interface ISpecilaist {
  id: string;
  name: string;
  param: string;
  about: string;
  descrition: string[];
  img: string;
  servecies: string[];
  diplomas: string[];
}

type Specilaists = { specialists: ISpecilaist[] }

export const useSpecilaists = create<Specilaists>(() => ({
  specialists: [
    {
      id: uuid(),
      name: 'Нагаева Ольга Владимировна',
      param: "Nagaeva_O",
      about: 'Руководитель студии, мастер подологии и маникюра',
      img: img1,
      servecies: ['ss', "ddd", "kkk"],
      descrition: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio'],
      diplomas: [diploma, diploma, diploma],
    },
    {
      id: uuid(),
      name: 'Ольговая Ольга Ольговна',
      param: "Olgovaya_O",
      img: img2,
      about: 'Мастер маникюра',
      servecies: ['11', "dd22d", "44"],
      descrition: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio'],
      diplomas: [diploma, diploma, diploma]
    }]
}))


// Тексты
type Texts = { mainPageText: string[] }

export const useTexts = create<Texts>(() => ({
  mainPageText: [
    'mainPageText Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
    'mainPageText Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
    'mainPageText Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.'
  ]
}))

// //Страница О Клинике

type ServeciesTexts = {
  servecies: string[];
  help: string[];
}

export const useAbout = create<ServeciesTexts>(() => ({
  servecies: [
    'лечение/зачистку грибка',
    'обработку вросшего ногтя',
    'выпрямление скрученного/деформированного ногтя',
    'обработку диабетической стопы и сложных патологий',
    'удаление подошвенных бородавок',
    'обработку мозолей/трещин/натоптышей',
    'парамедицинский педикюр (комплексная обработка стоп)'
  ],
  help: [
    'изменился цвет, структура или форма ногтя',
    'беспокоит зуд, шелушение кожи стоп',
    'появились мозоли/натоптыши/трещины',
    'обработку диабетической стопы и сложных патологий',
    'ноготь врастает, причиняя боль',
    'появились дискомфортные ощущения при ходьбе',
    'имеются сложные патологии'
  ]
}))
