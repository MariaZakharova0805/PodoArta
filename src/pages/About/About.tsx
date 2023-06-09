import c from "./About.module.css"
import { Container } from "../../shared/ui/Container/Container"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { OurSlogansBlock } from "../../widgets/OurSlogansBlock/OurSlogansBlock";
import { useAbout } from "../../shared/store";
import { FC } from "react";
import { CabinetSliderImg } from "../../widgets/CabinetSliderImg/CabinetSliderImg";
import { SertificatesSlider } from "../../widgets/SertificatesSlider/SertificatesSlider";

export const About: FC = () => {
    const { servecies, help } = useAbout((state) => state);
    return (
        <Container>
            <div className={c.textBlock}>
            <HeaderH2 textAlign="center">О центре</HeaderH2>
            <p className={c.slogan}>Доверьте красоту и здоровье ваших ног тому, кому это действителньо важно</p>
            <p className={c.normal}>Ухоженные пяточки и пальцы ног — это акцент, который привнесет в ваш образ завершенность и подарит трудноуловимое, но такое важное для женщины ощущение ненавязчивого шика. Скажите "нет" мозолям, трещинам и грибам на ногах. Красота - это прежде всего здоровье.</p>
            <p className={c.normal}>Что вам в этом поможет:</p>
            <List list={servecies} />
            <p className={c.normal}>Перед началом работы я подробно расскажу о причинах проблемы, как ее устранить и как не допустить рецидива, а также дам рекомендации по домашнему уходу.</p>
            <p className={c.normal}>Вам пригодится моя помощь, если:</p>
            <List list={help} />
            </div>
            <p className={c.slogan}>Я помогу вашим ногам и стопам стать здоровыми и иметь эстетичный вид!</p>
            <OurSlogansBlock />
            <HeaderH2 textAlign="center">Сертификаты</HeaderH2>
            <SertificatesSlider/>
            <HeaderH2 textAlign="center">Кабинет</HeaderH2>
            <CabinetSliderImg />
        </Container>
    )
}

