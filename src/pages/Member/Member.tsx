import { FC, Fragment } from "react";
import c from "./Member.module.css"
import uuid from "react-uuid";
import { useParams } from "react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSpecilaists } from "../../shared/store";
import { Button } from "../../shared/ui/Button__green/Button"
import { Container } from "../../shared/ui/Container_big/Container"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2"
import { List } from "../../shared/ui/List/List"

export const Member: FC = () => {

    const { specialists } = useSpecilaists((state) => state);
    const { param } = useParams();

    const description = specialists.map(specialist => {
        if (specialist.param === param) {
            return (
                <Container key={specialist.id}>
                    <LazyLoadImage src={specialist.img}
                        alt="specialist" className={c.img}
                    />
                    <p className={c.about}>{specialist.about}</p>
                    <HeaderH2>{specialist.name}</HeaderH2>
                    <Button width="200px">Записаться на прием</Button>
                    <p className={c.description}>{specialist.descrition}</p>
                    <HeaderH2>Образование</HeaderH2>
                    <List list={specialist.descrition}></List>
                    <div className={c.diplomas}>{specialist.diplomas.map(img => <LazyLoadImage src={img} key={uuid()}
                        alt="diploma"
                    />)}</div>
                </Container>
            )
        }
    })

    return (
        <Fragment>
            {description}
        </Fragment>
    )
}