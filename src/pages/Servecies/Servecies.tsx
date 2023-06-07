import { Container } from "../../shared/ui/Container_big/Container"
import { ServiseList } from "./ServiceList";
import { ServiseBtns } from "../../widgets/ServiseBtns/ServiseBtns";
import { HeaderH2 } from '../../shared/ui/Headers/HeaderH2'
import { ContainerBlock } from "../../shared/ui/ContainerBlock/ContainerBlock";
export const Servecies = () => {
    return (
        <Container>
            <ContainerBlock>
                <HeaderH2 marginBottom="40px">Услуги</HeaderH2>
                <ServiseBtns />
                <ServiseList />
            </ContainerBlock>
        </Container>
    )
}