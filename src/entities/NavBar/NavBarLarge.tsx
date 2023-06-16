import c from "./NavBarLarge.module.css"
import { NavLink } from "react-router-dom";
import { NavBarLinks } from "../../shared/store";

export const NavBarLarge = () => {
  const navbarlinks = NavBarLinks((state) => state.links);
  return (
    <div className={c.list}>
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
    </div>
  )
}

