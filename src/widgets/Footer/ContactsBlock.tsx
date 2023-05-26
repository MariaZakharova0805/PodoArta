import c from "./Footer.module.css"
import { useContacts } from "../../shared/store";

export const ContactsBlock = () => {
  const { contacts } = useContacts((state) => state);

  return (
    <div className={c.contacts}>
      <p className={c.header}>Контакты</p>

      <div className={c.block}>{contacts.map(contact =>
        <a href={contact.link} className={c.text} key={contact.id}>{contact.details}</a>
      )
      }</div>

    </div >
  )
}

