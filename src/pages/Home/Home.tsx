import { FC } from "react";
import { Button } from "../../shared/ui/Button__green/Button";
import { ContainerBlock } from "../../shared/ui/ContainerBlock/ContainerBlock";
import { ContainerGrey } from "../../shared/ui/ContainerGrey/ContainerGrey";
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { useTexts, useServecies } from "../../shared/store";
import { ServeciesBlock } from "../../entities/ServeciesBlock/ServeciesBlock";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import c from "./Home.module.css"
import { FeedBack } from "../../entities/FeedBack/FeedBacks";

export const Home: FC = () => {
    const { mainPageText, mainImg, mainImgSm } = useTexts((state) => state);
    const { setActiveCategory } = useServecies((state) => state);

    return (
        <>
            <Container>
                <ContainerBlock>
                    <div className={c.topBlock}>
                        <div className={c.topBlock_text}>
                            <HeaderH1 marginBottom="40px">Подолог Нагаева Ольга</HeaderH1>
                            <List list={mainPageText} />
                            <div className={c.center}><Link to={`/specialists/Nagaeva_O`}><Button width={"200px"}>подробнее</Button></Link></div>
                        </div>
                        <div className={c.topBlock_img}>
                            <LazyLoadImage src={mainImg} placeholderSrc={mainImgSm} alt="Podolog Nagaeva Olga" />
                        </div>
                    </div>
                </ContainerBlock>
                <ContainerBlock>
                    <HeaderH2>Услуги</HeaderH2>
                    <ServeciesBlock />
                    <div className={c.center}><Link to={`/servecies`}><Button onClick={() => setActiveCategory('all')} width={"250px"}>смотреть все услуги</Button></Link></div>
                </ContainerBlock>
            </Container>
            <ContainerGrey>
                <Container>
                    <HeaderH2>Акции</HeaderH2>
                </Container>
            </ContainerGrey>
            <Container>
                <ContainerBlock>
                    <HeaderH2>Отзывы</HeaderH2>
                    <FeedBack />
                    <div className={c.center}>
                        <Link to={`https://yandex.kz/maps/org/podoarta/183344334290/reviews/?ll=37.620510%2C55.793343&z=15`} target="_blank"><Button width="250px">
                            смотреть все отзывы
                        </Button></Link>
                    </div>
                </ContainerBlock>
            </Container>
            <ContainerGrey>
                <Container>
                    <HeaderH2>Хотите получить первую консультацию от префессионального подолога?</HeaderH2>
                    <p>Восльзуйтесь удобной платформой для быстрой онлайн-записи и выберету подходящее для вас время</p>
                    <Button width="200px" margin="40px auto"><a href="https://widget.sonline.su/ru/services/?placeid=999963927" target="_blank">онлайн запись</a></Button>
                </Container>
            </ContainerGrey>
        </>
    )
}

