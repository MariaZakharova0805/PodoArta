import { FC } from "react";
import c from "./Home.module.css";
import { Button } from "../../shared/ui/Button__green/Button";
import { Container } from "../../shared/ui/Container/Container";
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { useTexts, useServecies } from "../../shared/store";
import { ServeciesBlock } from "../../widgets/ServeciesBlock/ServeciesBlock";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FeedBack } from "../../widgets/FeedBacksBlock/FeedBacksBlock";
import { ContainerGreen } from "../../shared/ui/ContainerGreen/ContainerGreen";
import { SpecialOffers } from "../../widgets/SpecialOffers/SpecialOffers";
import { OnlineBooking } from "../../widgets/OnlineBooking/OnlineBooking";
import { solineLink } from "../../shared/constants";

export const Home: FC = () => {
  const { mainPageText, mainImg, mainImgSm } = useTexts((state) => state);
  const { setActiveCategory } = useServecies((state) => state);
  return (
    <>
      <div className={c.container_gray}>
        <div className={c.topBlock}>
          <div className={c.topBlock_text}>
            <HeaderH2>Студия подологии и эстетики</HeaderH2>
            <HeaderH1>Ольги Нагаевой</HeaderH1>
            <List list={mainPageText} />
            <div className={c.topBlock_btn}>
              <a href={solineLink} target="_blank">
                <Button width={"241px"}>записаться </Button>
              </a>
            </div>
          </div>
          <div className={c.topBlock_img}>
            <LazyLoadImage
              src={mainImg}
              placeholderSrc={mainImgSm}
              alt="Podolog Nagaeva Olga"
            />
          </div>
        </div>
      </div>
      <Container>
        <HeaderH2 textAlign="center">Услуги</HeaderH2>
        <ServeciesBlock />
        <div className={c.button}>
          <Link to={`/servecies`}>
            <Button onClick={() => setActiveCategory("all")}>
              смотреть все услуги
            </Button>
          </Link>
        </div>
      </Container>
      <ContainerGreen>
        <Container>
          <HeaderH2 textAlign="center">Программы лояльности</HeaderH2>
          <SpecialOffers />
        </Container>
      </ContainerGreen>
      <Container>
        <HeaderH2 textAlign="center">
          Что клиенты говорят
          <br />о нашей работе
        </HeaderH2>
        <FeedBack />
        <div className={c.button}>
          <Link
            to={`https://yandex.kz/maps/org/podoarta/183344334290/reviews/?ll=37.620510%2C55.793343&z=15`}
            target="_blank"
          >
            <Button margin="40px 0 0 0">читать все отзывы</Button>
          </Link>
        </div>
      </Container>
      <OnlineBooking />
    </>
  );
};
