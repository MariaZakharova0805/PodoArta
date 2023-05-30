import { ReactNode } from "react";

//Pop up FeedBackForm
export interface IClientData {
  name?: string,
  surname?: string,
  lastName?: string,
  phone?: string,
  email?: string,
  text?: string,
}

// FeedBacks block
export interface IFeedback {
  id: string,
  rating: number,
  nickname: string,
  service: string,
  text: string,
  specialist: string,
  specialistParam: string,
  link?: string,
  img?: string,
}

// Contacts
export interface IContacts {
  id: string;
  title: string;
  details: string;
  img: ReactNode;
  link?: string;
}

// Company Slogan
export interface ISlogan {
  id: string;
  name: string;
  text: string;
  icon: ReactNode;
}

// Servecies info
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
export interface ICategories {
  id: string;
  name: string;
  category: string;
  active: boolean;
}

// Specialists/doctors info
interface IDiplomas {
  id: string;
  img: string;
  src: string;
  placeholder: string;
}
export interface ISpecilaist {
  id: string;
  name: string;
  param: string;
  about: string;
  descrition: string[];
  img: string;
  servecies: string[];
  diplomas: IDiplomas[];
}

//SocialLinksBlock
export interface ILinkInfo {
  href: string,
  id: string,
  text?: string,
}




