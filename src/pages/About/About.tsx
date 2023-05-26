import c from "./About.module.css";
import { Container } from "../../shared/ui/Container/Container";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { OurSlogansBlock } from "../../widgets/OurSlogansBlock/OurSlogansBlock";
import { useAbout } from "../../shared/store";
import { FC } from "react";
import { CabinetSliderImg } from "../../widgets/CabinetSliderImg/CabinetSliderImg";
import { SertificatesSlider } from "../../widgets/SertificatesSlider/SertificatesSlider";
import { OnlineCheckInBtn } from "../../entities/OnlineCheckInBtn/OnlineCheckInBtn";

export const About: FC = () => {
  const { servecies } = useAbout((state) => state);
  return (
    <Container>
      <div className={c.textBlock}>
        <HeaderH2 textAlign="center">О центре</HeaderH2>
        <p className={c.slogan}>
          Доверьте красоту и здоровье ваших ног тем, кому это действительно
          важно
        </p>
        <p className={c.normal}>
          Стопы невероятно значимая часть нашего тела, которая всю жизнь
          воспринимает колоссальные нагрузки. Поэтому здоровьем стоп необходимо
          заниматься на соответствующем уровне. И это требует всестороннего и
          профессионального подхода.
        </p>
        <p className={c.normal}>
          Специалисты нашего центра готовы помочь Вам найти правильное решение
          для устранения таких проблем, как:
        </p>
        <List list={servecies} />
      </div>
      <p className={c.slogan}>
        Мы поможем вашим ногам и стопам стать здоровыми и иметь эстетичный вид!
      </p>
      <OurSlogansBlock />
      <HeaderH2 textAlign="center">Сертификаты</HeaderH2>
      <SertificatesSlider />
      <HeaderH2 textAlign="center">Кабинет</HeaderH2>
      <CabinetSliderImg />
      <OnlineCheckInBtn />
    </Container>
  );
};
