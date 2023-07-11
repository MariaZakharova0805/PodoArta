import c from "./Logo.module.css";
import logo from "../../../public/logo_icon.png"

const Logo = () => {
    return (
        <img src={logo} className={c.logo} />
 
    )
}

export default Logo