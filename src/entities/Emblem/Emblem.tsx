import icon from "../../../public/icon.svg"
import c from "./Emblem.module.css"
import { Link } from "react-router-dom"
export const Emblem = () => {
    return (
        <Link to={`/`}> <div className={c.icon}><img className={c.img} src={icon} /></div></Link>
    )
}
