import c from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import SocialLinksBlock from "../SocialLinksBlock/SocialLinksBlock";
import { PhoneLink } from "../PhoneLink/PhoneLink";
import { NavBarLinks } from "../../shared/store";
import { FC } from "react";

type NavBarProps = {
  navbar?: 'navbar_footer' | 'navbar_lg' | 'navbar_sm'
}

export const NavBar: FC<NavBarProps> = ({ navbar }) => {
  const navbarlinks = NavBarLinks((state) => state.links);
  return (

    <div className={navbar === 'navbar_sm' ? c.menu : navbar === 'navbar_lg' ? c.menu_big : c.menu_footer}>
      {navbarlinks.map((text) => (
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
      {navbar === 'navbar_sm' ? <><div className={c.SocialLinksBlock}><SocialLinksBlock colorType="grey" /></div>
        <div className={c.PhoneLink}><PhoneLink /></div></> : <></>}
    </div>
  )
}

