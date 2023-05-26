import c from "./ContactsBlock.module.css";
import { useContacts } from "../../shared/store";

export const ContactsBlock = () => {
    const { contacts } = useContacts((state) => state);
    return (
        <div className={c.block}>{contacts.map(contact =>
            <a key={contact.id} className={c.block_item}
                href={contact.link} target="_black">
                <div className={c.block_item__text}><p className={c.block__item_title}>{contact.title}</p>
                    <p className={c.block__item_details}>{contact.details}</p></div>
                <div className={c.block_item__img}>{contact.img}</div>
            </a>)
        }</div>
    )
}