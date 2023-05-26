import List from '@mui/material/List';
import c from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";

const NavBarLinks = [
  { id: uuid(), name: 'Главная', link: '/' },
  { id: uuid(), name: 'О центре', link: '/about' },
  { id: uuid(), name: 'Услуги', link: '/servecies' },
  { id: uuid(), name: 'Специалисты', link: '/specialists' },
  { id: uuid(), name: 'Наши работы', link: '/gallery' },
  { id: uuid(), name: 'Контакты', link: '/contacts' },
]

export const NavBar = () => {
  return (
    <List>
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
    </List>
  )
}

