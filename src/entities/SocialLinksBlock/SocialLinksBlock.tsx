import { SvgComponent } from "../../shared/HomeSvgElector/SvgComponent"
import c from './SocialLinksBlock.module.css'
import { ILinkInfo } from "../../shared/inteface";

const LinkInfo: ILinkInfo[] = [
  { href: 'https://vk.com/podoarta', id: 'vk' },
  { href: 'https://www.instagram.com/nagaeva_podoarta', id: 'instagram' },
  { href: 'https://t.me/PodoArta_nagaeva', id: 'telegramm' },
  { href: 'https://wa.me/79998747811?text=Здравствуйте,%20пишу%20Вам%20с%20сайта%20https://podo-arta.vercel.app/%0D%0A', id: 'whatsapp' },
]

const SocialLinksBlock = () => {
  return (
    <div className={c.svgblock}>
      {LinkInfo.map((link) => {
        return <a key={link.id} href={link.href} target="_blank" className={c.svgblock__item}><SvgComponent id={link.id} /></a>
      })}
    </div >
  )
}

export default SocialLinksBlock