import c from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import SocialLinksBlock from "../SocialLinksBlock/SocialLinksBlock";
import { PhoneLink } from "../PhoneLink/PhoneLink";
import { NavBarLinks } from "../../shared/store";

export const NavBar = () => {
  const navbarlinks = NavBarLinks((state) => state.links);
  return (
    <div className={c.menu}>
      <div className={c.exit}></div>
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
      <div className={c.SocialLinksBlock}><SocialLinksBlock colorType="grey" /></div>
      <div className={c.PhoneLink}><PhoneLink /></div>
    </div>
  )
}

