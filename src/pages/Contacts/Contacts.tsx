import { FC } from "react";
import { ContainerGrey } from "../../shared/ui/ContainerGrey/ContainerGrey"
import { Container } from "../../shared/ui/Container_big/Container"
import { ContactsBlock } from "../../widgets/ContactsBlock/ContactsBlock";
import IFrame from "../../entities/IFrame/IFrame";
import c from "./Contacts.module.css"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { Button } from "../../shared/ui/Button__green/Button";

export const Contacts: FC = () => {
    return (
        <ContainerGrey>
            <Container>
                <HeaderH2>Контакты</HeaderH2>
                <div className={c.grid}>
                    <div><ContactsBlock /><Button width="200px" margin="40px auto"><a href="https://widget.sonline.su/ru/services/?placeid=999963927" target="_blank">онлайн запись</a></Button></div>
                    <IFrame />
                </div>
            </Container>
        </ContainerGrey>
    )
}

