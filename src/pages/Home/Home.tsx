import { FC } from "react";
import { Button } from "../../shared/ui/Button__green/Button";
import { ContainerBlock } from "../../shared/ui/ContainerBlock/ContainerBlock";
import { ContainerGrey } from "../../shared/ui/ContainerGrey/ContainerGrey";
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { useTexts } from "../../shared/store";
import { ServeciesBlock } from "../../entities/ServeciesBlock/ServeciesBlock";
import { SpecilalistBlock } from "../../entities/SpecialistsBlock/SpecialistsBlock";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import c from "./Home.module.css"
import { FeedBack } from "../../entities/FeedBack/FeedBacks";
import CallUsForm from "../../features/CallUsForm/CallUsForm";

export const Home: FC = () => {
    const { mainPageText, mainImg } = useTexts((state) => state);
    return (
        <>
            <Container>
                <ContainerBlock>
                    <div
                        className={c.topBlock}>
                        <div className={c.topBlock_text}>
                            <HeaderH1 marginBottom="40px">Центр подологии и педикюра</HeaderH1>
                            <List list={mainPageText} />
                            <Button width={"200px"}><Link to={`/about`}>подробнее</Link></Button>
                        </div>
                        <div className={c.topBlock_img}>
                            <LazyLoadImage src={mainImg} />
                        </div>
                    </div>
                </ContainerBlock>
                <ContainerBlock>
                    <HeaderH1 >Популярные услуги</HeaderH1>
                    <ServeciesBlock />
                    <Link to={`/servecies`}><Button width={"250px"}>смотреть все услуги</Button></Link>
                </ContainerBlock>
            </Container>
            <ContainerGrey>
                <Container>
                    <HeaderH2>Наши специалисты</HeaderH2>
                    <SpecilalistBlock />
                </Container>
            </ContainerGrey>
            <Container>
                <ContainerBlock>
                    <HeaderH2>Отзывы</HeaderH2>
                    <FeedBack />
                    <Link to={`/about`}><Button width={"250px"}>смотреть все отзывы</Button></Link>
                </ContainerBlock>
            </Container>
            <ContainerGrey>
                <Container>
                    <CallUsForm />
                </Container>
            </ContainerGrey>
        </>
    )
}

