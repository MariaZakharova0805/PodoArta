import c from "./About.module.css"
import { Button } from "../../shared/ui/Button__green/Button";
import { ContainerBlock } from "../../shared/ui/ContainerBlock/ContainerBlock";
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { List } from "../../shared/ui/List/List";
import { OurSlogansBlock } from "../../entities/OurSlogans/OurSlogansBlock";
import { useAbout } from "../../shared/store";
import { FC } from "react";
import { FeedBack } from "../../entities/FeedBack/FeedBacks";
import { useFeedBackForm } from "../../shared/store";

export const About: FC = () => {

    const { servecies, help } = useAbout((state) => state);
    const { visible, setVisible } = useFeedBackForm((state) => state);

    const openForm = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        visible === true ? setVisible(false) : setVisible(true)
    }

    return (
        <Container>
            <ContainerBlock>
                <HeaderH1 marginBottom="40px">О клинике</HeaderH1>
                <p className={c.bold}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia pariatur autem aspernatur sed neque optio culpa. Quibusdam laborum, numquam dolor magnam pariatur similique perspiciatis, fugit, nihil reprehenderit reiciendis molestias.</p>
                <p className={c.normal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia pariatur autem aspernatur sed neque optio culpa. Quibusdam laborum, numquam dolor magnam pariatur similique perspiciatis, fugit, nihil reprehenderit reiciendis molestias.</p>
                <p className={c.normal}>Мы предлагаем:</p>
                <List list={servecies} />
                <p className={c.normal}>Перед началом работы специалист-подолог подробно расскажет о причинах проблемы, как ее устранить и как не допустить рецидива, а также даст рекомендации по домашнему уходу.</p>
                <p className={c.normal}>Вам пригодится наша помощь, если:</p>
                <List list={help} />
                <p className={c.normal}>Мы поможем Вашим ногам и стопам стать здоровыми и иметь эстетичный вид !</p>
            </ContainerBlock>
            <ContainerBlock>
                <OurSlogansBlock />
            </ContainerBlock>
            <ContainerBlock>
                <HeaderH2>Отзывы</HeaderH2>
                <FeedBack />
            </ContainerBlock>
            <ContainerBlock>
                <HeaderH2>Оставьте свой отзыв</HeaderH2>
                <p className={c.center}>Мы всегда открыты к Вашим отзывами и предложениям!</p>
                <Button width={"150px"} onClick={openForm}>Оставить отзыв</Button>
            </ContainerBlock>
        </Container>
    )
}

