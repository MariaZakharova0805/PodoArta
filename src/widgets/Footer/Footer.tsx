import { AboutBlock } from "./AboutBlock"
import { ContactsBlock } from "./ContactsBlock"
import c from "./Footer.module.css"
import PaymentBlock from "./PaymentBlock"
import { SocilaLinksBlock } from "./SocilaLinksBlock"

export const Footer = () => {
    return (
        <div className={c.footer}>
            <AboutBlock />
            <SocilaLinksBlock />
            <PaymentBlock />
            <ContactsBlock />
            <br/>
        </div>
    )
}