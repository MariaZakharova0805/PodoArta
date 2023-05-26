import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1"
import { ServiseList } from "./ServiceList";
import { ServiseBtns } from "../../entities/ServiseBtns/ServiseBtns";

export const Servecies = () => {

    return (
        <Container>
            <HeaderH1 marginBottom="40px">Услуги</HeaderH1>
            <ServiseBtns />
            <ServiseList />
        </Container>
    )
}