import c from "./Logo.module.css";
import logo from "../../../public/logo.svg"

const Logo = () => {
    return (
        <img src={logo} className={c.logo} />
 
    )
}

export default Logo