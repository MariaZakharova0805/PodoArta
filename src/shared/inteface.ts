import { ReactNode } from "react";

//INavBarLinks

export interface INavBarLinks {
  id: string,
  name: string,
  link: string,
}
//Pop up FeedBackForm
export interface IClientData {
  name: string | undefined,
  surname?: string | undefined,
  lastName: string | undefined,
  phone: string | undefined,
  email: string | undefined,
  text?: string | undefined,
}

export interface IServece {
  id: string,
  name: string,
  link: string,
}


// FeedBacks block
export interface IFeedback {
  id: string,
  rating: number,
  nickname: string,
  service: IServece[],
  text: string,
  specialist: string,
  specialistParam: string,
  link?: string,
  img?: string,
  mainPage: boolean,
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
  popular: boolean;
  category: string;
  price: number;
  link?: string;
}
export interface ICategories {
  details?: string;
  id: string;
  name: string;
  category: string;
  active: boolean;
  img?: string;
  imgSM?: string;
}

//SocialLinksBlock
export interface ILinkInfo {
  href: string,
  id: string,
  text?: string,
  src: any,
  srcW: any,
  tag?: string,
}

//Cabinet images
export interface ICabinetImage {
  id: string,
  image: string,
  imageSM: string,
  placeholder: string
}


//Sertificates images
export interface ISertificates {
  id: string,
  image: string,
  imageSM: string,
  alt: string
}
