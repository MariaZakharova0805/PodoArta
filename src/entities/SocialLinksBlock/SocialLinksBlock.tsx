import c from './SocialLinksBlock.module.css'
import { ILinkInfo } from "../../shared/inteface";
import vk from "../../../public/icons/vk.svg"
import vk_w from "../../../public/icons/vk_w.svg"
import instagram from "../../../public/icons/instagram.svg"
import telegram from "../../../public/icons/telegram.svg"
import whatsapp from "../../../public/icons/whatsapp.svg"
import instagramW from "../../../public/icons/instagramW.svg"
import telegramW from "../../../public/icons/telegramW.svg"
import whatsappW from "../../../public/icons/whatsappW.svg"
import { FC } from 'react';

type ISocialLinksBlock = {
  colorType?: "grey" | "white"
}

const LinkInfo: ILinkInfo[] = [
  { href: 'https://www.instagram.com/nagaeva_podoarta', id: 'instagram', src: instagram, srcW: instagramW, tag: "*" },
  { href: 'https://t.me/PodoArta_nagaeva', id: 'telegramm', src: telegram, srcW: telegramW },
  { href: 'https://wa.me/79998747811?text=Здравствуйте,%20пишу%20Вам%20с%20сайта%20https://www.podoarta.space/%0D%0A', id: 'whatsapp', src: whatsapp, srcW: whatsappW },
  { href: 'https://vk.com/podoarta', id: 'vk', src: vk, srcW: vk_w },
]

const SocialLinksBlock: FC<ISocialLinksBlock> = ({ colorType }) => {
  return (
    <div className={c.svgblock}>
      {LinkInfo.map((link) => {
        return <a key={link.id} href={link.href} target="_blank" className={c.svgblock__item}>
          <div className={c.tagBlock}>
            <img src={colorType === "grey" ? link.src : link.srcW} />
            <span className={c.tag}>{link.tag}</span></div>
        </a>
      })}
    </div >
  )
}

export default SocialLinksBlock
