import c from "./NavBarLarge.module.css"
import { NavLink } from "react-router-dom";
import { v1 as uuidv1 } from 'uuid';

const NavBarLinks = [
  { id: uuidv1(), name: 'Главная', link: '/' },
  { id: uuidv1(), name: 'О центре', link: '/about' },
  { id: uuidv1(), name: 'Услуги', link: '/servecies' },
  // { id: uuidv1(), name: 'Специалисты', link: '/specialists' },
  { id: uuidv1(), name: 'Наши работы', link: '/gallery' },
  { id: uuidv1(), name: 'Контакты', link: '/contacts' },
]

export const NavBarLarge = () => {
  return (
    <div className={c.list}>
      {NavBarLinks.map((text) => (
        <NavLink key={text.id}
          to={text.link}
          className={({ isActive, isPending }) =>
            isActive
              ? c.link_active
              : isPending
                ? c.link
                : c.link
          }
        >
          {text.name}
        </NavLink>
      ))}
    </div>
  )
}

