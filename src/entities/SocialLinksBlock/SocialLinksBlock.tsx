import { SvgComponent } from "../../shared/HomeSvgElector/SvgComponent"
import c from './SocialLinksBlock.module.css'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useFeedBackForm } from "../../shared/store";

interface LinkInfo {
  href: string,
  id: string
}

const LinkInfo: LinkInfo[] = [
  { href: '#', id: 'call' },
  { href: 'https://vk.com/podoarta', id: 'vk' },
  { href: 'https://www.instagram.com/nagaeva_podoarta', id: 'instagram' },
  { href: 'https://t.me/PodoArta_nagaeva', id: 'telegramm' },
  { href: 'https://api.whatsapp.com/send?phone=79998747811', id: 'whatsapp' },
]

const SocialLinksBlock = () => {
  const { visible, setVisible } = useFeedBackForm((state) => state);

  const openForm = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    visible === true ? setVisible(false) : setVisible(true)
  }

  return (
    <div className={c.svgblock}>
      {LinkInfo.map((link) => {
        if (link.id === 'call') {
          return <button onClick={openForm} className={c.openForm}><PhoneInTalkIcon /></button>
        } else {
          return <a key={link.id} href={link.href} target="_blank" className={c.svgblock__item}><SvgComponent id={link.id} /></a>
        }
      }
      )}
    </div >
  )
}

export default SocialLinksBlock