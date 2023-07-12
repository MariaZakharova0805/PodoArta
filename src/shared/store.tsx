import { create } from "zustand";
import { v1 as uuidv1 } from 'uuid';
import { INavBarLinks, IServecies, IFeedback, IContacts, ISlogan, ICategories, ICabinetImage, ISertificates } from "./inteface";
import advantage from "../../public/icons/advantage.svg"
import experinece from "../../public/icons/experinece.svg"
import care from "../../public/icons/care.svg"
import mainImg from "../../public/img/main.png"
import mainImgSm from "../../public/img/mainSM.png"
//Images for servecies
import pogology from "../../public/img/servecies/podology.jpg"
import growin from "../../public/img/servecies/growin.jpg"
import zto from "../../public/img/servecies/zto.jpg"
import vpch from "../../public/img/servecies/vpch.jpg"
import ortozy from "../../public/img/servecies/ortozy.jpg"
import manicure from "../../public/img/servecies/manicure.jpg"
//Icons for ContacktsBlock
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
//Images of cabinet
import cab1 from "../../public/img/cabinet/cab1.jpg"
import cab1SM from "../../public/img/cabinet/cab1SM.jpg"
import cab2 from "../../public/img/cabinet/cab2.jpg"
import cab2SM from "../../public/img/cabinet/cab2SM.jpg"
import cab3 from "../../public/img/cabinet/cab3.jpg"
import cab3SM from "../../public/img/cabinet/cab3SM.jpg"
import cab4 from "../../public/img/cabinet/cab4.jpg"
import cab4SM from "../../public/img/cabinet/cab4SM.jpg"
import cab5 from "../../public/img/cabinet/cab5.jpg"
import cab5SM from "../../public/img/cabinet/cab5SM.jpg"
import cab6 from "../../public/img/cabinet/cab6.jpg"
import cab6SM from "../../public/img/cabinet/cab6SM.jpg"
import cab7 from "../../public/img/cabinet/cab7.jpg"
import cab7SM from "../../public/img/cabinet/cab7SM.jpg"
import cab8 from "../../public/img/cabinet/cab8.jpg"
import cab8SM from "../../public/img/cabinet/cab8SM.jpg"
import cab9 from "../../public/img/cabinet/cab9.jpg"
import cab9SM from "../../public/img/cabinet/cab9SM.jpg"
import cab10 from "../../public/img/cabinet/cab10.jpg"
import cab10SM from "../../public/img/cabinet/cab10SM.jpg"
import cab11 from "../../public/img/cabinet/cab11.jpg"
import cab11SM from "../../public/img/cabinet/cab11SM.jpg"
import cab12 from "../../public/img/cabinet/cab12.jpg"
import cab12SM from "../../public/img/cabinet/cab12SM.jpg"
import cab13 from "../../public/img/cabinet/cab13.jpg"
import cab13SM from "../../public/img/cabinet/cab13SM.jpg"
import cab14 from "../../public/img/cabinet/cab14.jpg"
import cab14SM from "../../public/img/cabinet/cab14SM.jpg"
import cab15 from "../../public/img/cabinet/cab15.jpg"
import cab15SM from "../../public/img/cabinet/cab15SM.jpg"
import cab16 from "../../public/img/cabinet/cab16.jpg"
import cab16SM from "../../public/img/cabinet/cab16SM.jpg"
//Images of sertificates 
import sert0 from "../../public/img/documents/sertificate.jpg"
import sert0_sm from "../../public/img/documents/sertificate_sm.jpg"
import sert1 from "../../public/img/documents/sert1.jpg"
import sert1_sm from "../../public/img/documents/sert1_sm.jpg"
import sert2 from "../../public/img/documents/sert2.jpg"
import sert2_sm from "../../public/img/documents/sert1_sm.jpg"
import sert3 from "../../public/img/documents/sert3.jpg"
import sert3_sm from "../../public/img/documents/sert3_sm.jpg"
import sert4 from "../../public/img/documents/sert4.jpg"
import sert4_sm from "../../public/img/documents/sert4_sm.jpg"
import sert5 from "../../public/img/documents/sert5.jpg"
import sert5_sm from "../../public/img/documents/sert5_sm.jpg"

//NavBar
type NavBarLinks = {
  links: INavBarLinks[]
}
export const NavBarLinks = create<NavBarLinks>(() => ({
  links: [
    { id: uuidv1(), name: 'Главная', link: '/' },
    { id: uuidv1(), name: 'О центре', link: '/about' },
    { id: uuidv1(), name: 'Услуги', link: '/servecies' },
    { id: uuidv1(), name: 'Наши работы', link: '/gallery' },
    { id: uuidv1(), name: 'Контакты', link: '/contacts' },
  ]
}))

//Cabinet Images fro slider
type CabinetImages = { cabImg: ICabinetImage[] }
export const useCabinetImages = create<CabinetImages>(() => ({
  cabImg: [
    {
      id: uuidv1(),
      image: cab1,
      imageSM: cab1SM,
      placeholder: 'кабинет'
    },
    {
      id: uuidv1(),
      image: cab2,
      imageSM: cab2SM,
      placeholder: 'стол для маникюра'
    },
    {
      id: uuidv1(),
      image: cab3,
      imageSM: cab3SM,
      placeholder: 'кресло для педикюра'
    },
    {
      id: uuidv1(),
      image: cab4,
      imageSM: cab4SM,
      placeholder: 'кабинет общий вид'
    },
    {
      id: uuidv1(),
      image: cab5,
      imageSM: cab5SM,
      placeholder: 'кабинет общий вид'
    },
    {
      id: uuidv1(),
      image: cab6,
      imageSM: cab6SM,
      placeholder: 'кабинет общий вид'
    },
    {
      id: uuidv1(),
      image: cab7,
      imageSM: cab7SM,
      placeholder: 'аппарат для подологии'
    },
    {
      id: uuidv1(),
      image: cab8,
      imageSM: cab8SM,
      placeholder: 'аппарат для подологии'
    },
    {
      id: uuidv1(),
      image: cab9,
      imageSM: cab9SM,
      placeholder: 'стирилизованные инструменты'
    },
    {
      id: uuidv1(),
      image: cab10,
      imageSM: cab10SM,
      placeholder: 'уходовые средства для ног и рук'
    },
    {
      id: uuidv1(),
      image: cab11,
      imageSM: cab11SM,
      placeholder: 'уходовые средства PodoFarm'
    },
    {
      id: uuidv1(),
      image: cab12,
      imageSM: cab12SM,
      placeholder: 'уходовые средства'
    },
    {
      id: uuidv1(),
      image: cab13,
      imageSM: cab13SM,
      placeholder: 'вход с улицы'
    },
    {
      id: uuidv1(),
      image: cab14,
      imageSM: cab14SM,
      placeholder: 'вход с улицы'
    },
    {
      id: uuidv1(),
      image: cab15,
      imageSM: cab15SM,
      placeholder: 'вход с улицы'
    },
    {
      id: uuidv1(),
      image: cab16,
      imageSM: cab16SM,
      placeholder: 'вход с улицы'
    },
  ]
}))



// Main page text
type Texts = { mainPageText: string[], mainImg: string, mainImgSm: string }
export const useTexts = create<Texts>(() => ({
  mainPageText: [
    'Забочусь о здоровье и красоте ваших ног',
    'Предоставляю услуги высокого качества',
    'Всегда думаю о вас'
  ],
  mainImg: mainImg,
  mainImgSm: mainImgSm
}))

// FeedBacks block
type useFeedbacks = { feedbacks: IFeedback[] }
export const useFeedbacks = create<useFeedbacks>(() => ({
  feedbacks: [
    {
      id: uuidv1(),
      rating: 5,
      nickname: 'Анастасия',
      service: [{ id: uuidv1(), name: "педикюр", link: 'podology' }, { id: uuidv1(), name: "коррекция врастания ногтей", link: 'growin_correction' }],
      text: "Это лучший мастер, который случался со мной и моим мужем. Ехали из Архангельска специально к Ольге (у меня и мужа проблема вросших ногтей)! Тот момент, когда ты уверен в работе человека на все 100% и готов приехать куда угодно. С моей придирчивостью за счастье найти золотые руки и качество услуг.",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/183344334290/reviews?reviews[publicId]=mydxvynaz8a1hqe6qvgezgyrf0&utm_source=review",
      mainPage: false,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: 'Кристина С.',
      service: [{ id: uuidv1(), name: "педикюр", link: 'podology' }],
      text: "Найти «своего» мастера педикюра достаточно сложно - то выпиливают ногти, то стирают до дыр пятки! Но мне повезло- я нашла Ольгу!! Профессионал с легкими руками, ненавязчивыми советами по правильному домашнему уходу, максимально аккуратно и бережно обрабатывает стопы и пальцы -и, вуаля...",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/183344334290/reviews?reviews[publicId]=jxp68j1zqqwapnjew377w6v5y8&utm_source=review",
      mainPage: true,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: 'Мария К.',
      service: [{ id: uuidv1(), name: "педикюр", link: 'podology' }, { id: uuidv1(), name: "маниюкр", link: 'manicure' }],
      text: "Нас с Олей свела судьба😊 совершенно случайно. Была в поисках идеального мастера год и вот я счастливый клиент этой замечательной девушки уже почти 2 года. Золотые руки! Всегда оооочень аккуратно, красиво, со вкусом, учитывает любые пожелания клиента, работает на совесть...",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
      link: 'https://yandex.kz/web-maps/org/183344334290/reviews?reviews[publicId]=15xxfkjy8ctgqb8vj0wvqjnq1g&utm_source=review',
      mainPage: true,
    },
    {
      id: uuidv1(),
      rating: 5,
      nickname: 'Кристина C.',
      service: [{ id: uuidv1(), name: "педикюр", link: 'podology' }, { id: uuidv1(), name: "маниюкр", link: 'manicure' }],
      text: "Считаю себя довольно требовательным клиентом к качеству исполнения работ по маникюру и педикюру, но Оле я всегда полностью доверяю без желания контролировать ее работу. Она отличный специалист, который знает свое свое дело. Делает все максимально качественно!",
      specialist: 'Нагава Ольга Владимировна',
      specialistParam: "Nagaeva_O",
      link: "https://yandex.kz/web-maps/org/183344334290/reviews?reviews[publicId]=5vnx8xbp4n4u9dqy4w3qphw7gg&utm_source=review",
      mainPage: false,
    }
  ]
}))

// Contacts
type Contacts = { contacts: IContacts[] }
export const useContacts = create<Contacts>(() => ({
  contacts: [
    {
      id: uuidv1(),
      title: 'Телефон',
      details: '+7 999 87 47 811',
      img: <PhoneInTalkIcon />,
      link: 'tel:+79998747811',
    },
    {
      id: uuidv1(),
      title: 'г.Москва',
      details: 'м.Новослободская, ул. Сущёвская, 9',
      img: <RoomIcon />,
      link: 'https://yandex.ru/web-maps/213/moscow/house/sushchyovskaya_ulitsa_9/Z04YcAdhT0IFQFtvfXt5cXlkbA==/?ll=37.601672%2C55.780578&utm_source=review&z=17',
    },
    {
      id: uuidv1(),
      title: 'Режим работы:',
      details: 'Пн-вт, чт, сб: 10:00—22:00; вс: 10:00—16:00',
      img: <AccessTimeIcon />,
    },
    {
      id: uuidv1(),
      title: 'E-mail:',
      details: 'Nagaevaolga87@gmail.com',
      img: <EmailIcon />,
      link: 'mailto:Nagaevaolga87@gmail.com?subject=Сообщение%20с%20сайта%20https://www.podoarta.space/&body=Здравствуйте!%0D%0A%0D%0A',
    }
  ]
}))

// Company Slogan
type Slogan = { slogans: ISlogan[] }
export const useSlogan = create<Slogan>(() => ({
  slogans: [
    {
      id: uuidv1(),
      name: "Доверие",
      text: "Всегда на первом месте. Объясню причины и способы исправить.",
      icon: <img src={experinece} />
    },
    {
      id: uuidv1(),
      name: "5 лет",
      text: "Забочусь о здоровье взрослых и детей.",
      icon: <img src={care} />
    },
    {
      id: uuidv1(),
      name: "Специалист",
      text: "Высокого уровня с огромным стажем.",
      icon: <img src={advantage} />
    },
  ]
}))

// Servecies info
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
    { id: uuidv1(), name: "Все услуги", category: 'all', active: true },
    { id: uuidv1(), name: "Педикюр", category: 'podology', active: false, img: pogology },
    { id: uuidv1(), name: "Коррекция врастания ногтей", category: 'growin_correction', active: false, img: growin },
    { id: uuidv1(), name: "Коррекционные системы", details: 'Титановая нить, 3ТО, Фрезера', category: 'correction_systems', active: false, img: zto },
    { id: uuidv1(), name: "Обработка ВПЧ", details: 'бородавка/шипица', category: 'vpch_correction', active: false, img: vpch },
    { id: uuidv1(), name: "Ортозы", category: 'ortozy', active: false, img: ortozy },
    { id: uuidv1(), name: "Маникюр", category: 'manicure', active: false, img: manicure },
  ],

  servecies: [
    //podology Подология
    {
      id: uuidv1(),
      name: 'Консультация подолога',
      param: "Konsultaciya_podologa",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 1200,
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390287"
    },
    {
      id: uuidv1(),
      name: 'Препаратный педикюр КАРТ',
      param: "Preparatnyj-pedikyur-KART",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 4000',
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=92989027"

    },
    {
      id: uuidv1(),
      name: 'Педикюр I степени сложности',
      param: "Pedikyur-I-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 3500,
      category: 'podology_pedicur_feet',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10387212",
    },
    {
      id: uuidv1(),
      name: 'Педикюр II степени сложности',
      param: "Pedikyur-II-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 4500,
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10387217",
    },
    {
      id: uuidv1(),
      name: 'Педикюр III степени сложности',
      param: "Pedikyur-III-stepeni-slozhnosti",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 5500,
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10387222"
    },
    {
      id: uuidv1(),
      name: 'Обработка пальцев без стопы',
      param: "Obrabotka-palcev-bez-stopy",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: true,
      price: 2500,
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9298912",
    },
    {
      id: uuidv1(),
      name: 'Обработка 1 ногтя на ногах',
      param: "Obrabotka-1-nogtya-na-nogah",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 0',
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390307',
    },
    {
      id: uuidv1(),
      name: 'Подстригание и форма ногтей',
      param: "Podstriganie-i-forma-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 1200',
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390417',
    },
    {
      id: uuidv1(),
      name: 'Протезирование ногтевой пластины',
      param: "Protezirovanie-nogtevoj-plastiny",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: "от 500",
      category: 'podology',
      link: "https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390317",
    },
    {
      id: uuidv1(),
      name: 'Обработка стоп(неполная)',
      param: "Kompleksnya-obrabotka-stop-nopolnay",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: true,
      price: "от 2500",
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10387267',
    },
    {
      id: uuidv1(),
      name: 'Обработка трещин на стопе с наложением повязки',
      param: "Obrabotka-treshchin-na-stope-s-nalozheniem-povyazki",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: "от 500",
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390277',

    },
    {
      id: uuidv1(),
      name: 'Обработка стержневой мозоли',
      param: "Obrabotka-sterzhnevoj-mozoli",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: "от 1000",
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390362',

    },
    {
      id: uuidv1(),
      name: 'Покрытие гель-лак',
      param: "Pokrytie-gel-lak",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: true,
      price: 1000,
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9298922',

    },
    {
      id: uuidv1(),
      name: 'Покрытие лак',
      param: "Pokrytie-lak",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 600,
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9298927',
    },
    {
      id: uuidv1(),
      name: 'Снятие покрытия в процедуре педикюра',
      param: "Snyatie-pokrytiya-v-procedure-pedikyura",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 300,
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9298932',
    },
    {
      id: uuidv1(),
      name: 'Снятие покрытия(ноги)',
      param: "Snyatie-pokrytiya(nogi)",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 700,
      category: 'podology',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10387207',

    },
    // growin_correction Коррекция врастания ногтей
    {
      id: uuidv1(),
      name: 'Коррекция вросшего ногтя I стадия',
      param: "Korrekciya-vrosshego-nogtya-I-stadiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 2000,
      category: 'growin_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299017',

    },
    {
      id: uuidv1(),
      name: 'Коррекция вросшего ногтя II и III стадия',
      param: "Korrekciya-vrosshego-nogtya-II-III-stadiya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 3000,
      category: 'growin_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299022',
    },
    {
      id: uuidv1(),
      name: 'Плановый осмотр и повязка',
      param: "Planovyj-osmotr-i-povyazka",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 1000,
      category: 'growin_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299027',
    },
    // correction_systems Коррекционные системы
    {
      id: uuidv1(),
      name: 'Установка первичная на 1 ноготь',
      param: "Ustanovka-pervichnaya-na-1-nogot-ZTO",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 4000,
      category: 'correction_systems',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299042',
    },
    {
      id: uuidv1(),
      name: 'Установка первичная на 2 ноготя',
      param: "Ustanovka-pervichnaya-na-2-nogtya-ZTO",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 5000,
      category: 'correction_systems',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299047',
    },
    {
      id: uuidv1(),
      name: 'Коррекция системы на 1 ноготь',
      param: "Korrekciya-systemy-na-1-nogot",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 3000,
      category: 'correction_systems',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299052'
    },
    {
      id: uuidv1(),
      name: 'Коррекция системы на 2 ноготя',
      param: "Korrekciya-systemy-na-1-nogoty",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 3500,
      category: 'correction_systems',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299057',
    },
    // vpch_correction Обработка ВПЧ (бородавка\шипица)
    {
      id: uuidv1(),
      name: 'Обработка ВПЧ 1-3 шт.',
      param: "Obrabotka-VPCH-1-3-sht",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 1500,
      category: 'vpch_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299067',
    },
    {
      id: uuidv1(),
      name: 'Обработка ВПЧ 3-5 шт.',
      param: "Obrabotka-VPCH-3-5-sht",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 2000,
      category: 'vpch_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299077',
    },
    {
      id: uuidv1(),
      name: 'Обработка ВПЧ 5 и более шт.',
      param: "Obrabotka-VPCH-5-i-bolee-sh",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 2500,
      category: 'vpch_correction',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299082',
    },
    //  ortozy Ортозы
    {
      id: uuidv1(),
      name: 'Изготовление индивидуальных ортозов',
      param: "Izgotovlenie-individualnyh-ortozov",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: "от 500",
      category: 'ortozy',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299092',
    },
    //manicure МАНИКЮР
    {
      id: uuidv1(),
      name: 'Маникюр гигиенический',
      param: "Manikyur-gigienicheskij",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 1600,
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299107',
    },
    {
      id: uuidv1(),
      name: 'Маникюр с покрытием ALL INCLUSIVE',
      param: "Manikyur-s-pokrytiem-ALL-INCLUSIVE",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 3500,
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299112',
    },
    {
      id: uuidv1(),
      name: 'Наращивание ногтей',
      param: "Narashchivanie-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 5000,
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299142',
    },
    {
      id: uuidv1(),
      name: 'Сложная коррекция длинных ногтей',
      param: "Slozhnaya-korrekciya-dlinnyh-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 4500,
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299147',
    },
    {
      id: uuidv1(),
      name: 'Подологический маникюр',
      param: "Podologicheskij-manikyur",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 2500',
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390407',
    },
    {
      id: uuidv1(),
      name: 'Снятие покрытия полное',
      param: "Snyatie-pokrytiya-polnoe",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 2000',
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299122',
    },
    {
      id: uuidv1(),
      name: 'Дизайн ногтей',
      param: "Dizajn-nogtej",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 0',
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299152',
    },
    {
      id: uuidv1(),
      name: 'Дизайн Френч',
      param: "Dizajn-french",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 'от 0',
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=9299157',
    },
    {
      id: uuidv1(),
      name: 'Ремонт 1 ногтя',
      param: "Remont-1-nogtya",
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae iure dolore ipsa distinctio, error nisi impedit minima esse illo voluptatum porro ipsum voluptates quasi animi, dolorem facere aut dicta.',
      popular: false,
      price: 500,
      category: 'manicure',
      link: 'https://widget.sonline.su/ru/mastersAndDate/?counts=1&gender=&master=662152&placeid=999963927&services=10390402',
    },]
}))

//About page text
type ServeciesTexts = {
  servecies: string[];
  help: string[];
}
export const useAbout = create<ServeciesTexts>(() => ({
  servecies: [
    'аппаратный и традиционный педикюр',
    'спа-уход для ногтей',
    'обработка вросшего ногтя',
    'выпрямление скрученного/деформированного ногтя',
    'обработка диабетической стопы и сложных патологий',
    'удаление подошвенных бородавок',
    'обработка мозолей/трещин/натоптышей',
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

type Sertificates = { sertificates: ISertificates[] }
export const useSertificates = create<Sertificates>(() => ({
  sertificates: [
    { id: uuidv1(), image: sert0, imageSM: sert0_sm, alt: 'Сертификат онихолизиц, протезрование ногтевой пластины' },
    { id: uuidv1(), image: sert1, imageSM: sert1_sm, alt: 'Сертификат SMART мастер' },
    { id: uuidv1(), image: sert2, imageSM: sert2_sm, alt: 'Сертификат врозший ноготь' },
    { id: uuidv1(), image: sert3, imageSM: sert3_sm, alt: 'Сертификат SMART мастер' },
    { id: uuidv1(), image: sert4, imageSM: sert4_sm, alt: 'Сертификат PodiaFarm' },
    { id: uuidv1(), image: sert5, imageSM: sert5_sm, alt: 'Сертификат медицинский педикюр' },
  ]
}))
