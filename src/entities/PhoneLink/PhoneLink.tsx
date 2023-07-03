import c from "./PhoneLink.module.css"
import { useContacts } from "../../shared/store"
export const PhoneLink = () => {
    const contacts = useContacts(state => state.contacts[0])
    return (
        <a href={contacts.link}>
            <div className={c.phone}>
                <div className={c.mobile}><div className={c.mobile_btn}></div></div>
                <p>{contacts.details}</p></div></a>
    )
}
