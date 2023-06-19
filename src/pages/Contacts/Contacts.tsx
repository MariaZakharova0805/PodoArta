import { FC } from "react";
import { Container } from "../../shared/ui/Container/Container"
import { ContactsBlock } from "../../widgets/ContactsBlock/ContactsBlock";
import IFrame from "../../entities/IFrame/IFrame";
import c from "./Contacts.module.css"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { Button } from "../../shared/ui/Button__green/Button";

export const Contacts: FC = () => {
    return (
        <div className={c.container}>
            <Container>
                <HeaderH2 textAlign="center">Контакты</HeaderH2>
                <div className={c.grid}>
                    <div><ContactsBlock /><Button width="280px" margin="40px auto"><a href="https://widget.sonline.su/ru/services/?placeid=999963927" target="_blank">онлайн запись</a></Button></div>
                    <IFrame />
                </div>
            </Container>
        </div>
    )
}

