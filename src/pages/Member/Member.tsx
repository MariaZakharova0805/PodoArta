import { FC, Fragment } from "react";
import c from "./Member.module.css"
import { useParams } from "react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSpecilaists } from "../../shared/store";
import { Button } from "../../shared/ui/Button__green/Button"
import { Container } from "../../shared/ui/Container/Container"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2"
import { List } from "../../shared/ui/List/List"
import { HeaderH1 } from "../../shared/ui/Headers/HeaderH1";

export const Member: FC = () => {
    const { specialists } = useSpecilaists((state) => state);
    const { param } = useParams();
    const description = specialists.map(specialist => {
        if (specialist.param === param) {
            return (
                <Container key={specialist.id}>
                    <LazyLoadImage src={specialist.img} alt={specialist.param} className={c.img} />
                    <p className={c.about}>{specialist.about}</p>
                    <HeaderH1>{specialist.name}</HeaderH1>
                    <div className={c.btn}><Button width="200px" height="60px">
                        <a href='https://widget.sonline.su/ru/services/9298887/?master=662152&placeid=999963927' target="_blank">Записаться на прием</a>
                    </Button></div>
                    <p className={c.description}>{specialist.descrition}</p>
                    <HeaderH2>Образование</HeaderH2>
                    <List list={specialist.descrition}></List>
                    <div className={c.diplomas}>{specialist.diplomas.map(diploma =>
                        <LazyLoadImage src={diploma.img} key={diploma.id} placeholderSrc={diploma.placeholder} effect="blur"
                            alt={diploma.src}
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