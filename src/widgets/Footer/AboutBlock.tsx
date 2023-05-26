import c from "./Footer.module.css"
import { Emblem } from "../../entities/Emblem/Emblem"

export const AboutBlock = () => {
    return (
        <div className={c.about}>
           <Emblem/>
            <p className={c.about_text}>2023 @ PodoArt </p>
        </div>
    )
}