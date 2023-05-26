import { FC } from "react";
import { ContainerGrey } from "../../shared/ui/ContainerGrey/ContainerGrey"
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1"
import { ContactsBlock } from "../../entities/ContactsBlock/ContactsBlock";
import IFrame from "../../entities/IFrame/IFrame";
import c from "./Contacts.module.css"

export const Contacts:FC = () => {
    return (
        <ContainerGrey>
            <Container>
                <HeaderH1 marginBottom="40px">Контакты</HeaderH1>
                <div className={c.grid}>
                    <ContactsBlock />
                    <IFrame />
                </div>
            </Container>
        </ContainerGrey>
    )
}

