import { FC } from "react";
import { Button } from "../../shared/ui/Button__green/Button";
import { ContainerBlock } from "../../shared/ui/ContainerBlock/ContainerBlock";
import { ContainerGrey } from "../../shared/ui/ContainerGrey/ContainerGrey";
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";
import { List } from "../../shared/ui/List/List";
import { useTexts } from "../../shared/store";
import { ServeciesBlock } from "../../entities/ServeciesBlock/ServeciesBlock";
import { SpecilalistBlock } from "../../entities/SpecialistsBlock/SpecialistsBlock";
import { Link } from "react-router-dom";

export const Home:FC = () => {

    const { mainPageText } = useTexts((state) => state);

    return (
        <>
            <Container>
                <ContainerBlock>
                    <HeaderH1 marginBottom="40px">Центр подологии и педикюра</HeaderH1>
                    <List list={mainPageText} />
                    <Link to={`/about`}><Button width={"200px"}>подробнее</Button></Link>
                </ContainerBlock>
                <ContainerBlock>
                    <HeaderH1>Популярные услуги</HeaderH1>
                    <ServeciesBlock />
                    <Link to={`/servecies`}><Button width={"200px"}>смотреть все услуги</Button></Link>
                </ContainerBlock>
            </Container>
            <ContainerGrey>
                <Container>
                    <HeaderH1>Наши специалисты</HeaderH1>
                    <SpecilalistBlock />
                </Container>
            </ContainerGrey>
        </>
    )
}

