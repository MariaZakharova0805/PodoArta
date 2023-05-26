import { FC } from "react";
import { Container } from "../../shared/ui/Container/Container";
import { ContactsBlock } from "../../widgets/ContactsBlock/ContactsBlock";
import IFrame from "../../entities/IFrame/IFrame";
import c from "./Contacts.module.css";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { OnlineCheckInBtn } from "../../entities/OnlineCheckInBtn/OnlineCheckInBtn";

export const Contacts: FC = () => {
  return (
    <div className={c.container}>
      <Container>
        <HeaderH2 textAlign="center">Контакты</HeaderH2>
        <div className={c.grid}>
          <div>
            <ContactsBlock />
            <OnlineCheckInBtn />
          </div>
          <IFrame />
        </div>
      </Container>
    </div>
  );
};
