import SocialLinksBlock from "../../entities/SocialLinksBlock/SocialLinksBlock"
import c from "./Footer.module.css"

export const SocilaLinksBlock = () => {
    return (
        <div className={c.social}>
            <p className={c.header}>Мы в соц.сетях:</p>
            <div className={c.socialLinksBlock}><SocialLinksBlock /></div>
            <p className={c.text_sm}>* instagram продукт компании Мета,<br />запрещенной на территории РФ</p>
        </div>
    )
}

