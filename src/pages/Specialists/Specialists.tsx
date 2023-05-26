import { FC } from "react"
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1"
import { SpecilalistBlock } from "../../entities/SpecialistsBlock/SpecialistsBlock"

export const Specialists:FC = () => {
   return (
        <Container>
            <HeaderH1 marginBottom="40px">Специалисты</HeaderH1>
            <SpecilalistBlock/>
        </Container>
    )
}

