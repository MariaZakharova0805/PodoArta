import c from "./Logo.module.css";
import logo from "../../../public/logo_icon.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={c.link}>
      <NavLink to="./">
        <img src={logo} className={c.logo} />
      </NavLink>
    </div>
  );
};

export default Logo;
