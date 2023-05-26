import c from "./SpecialistsBlock.module.css";
import { Button } from "../../shared/ui/Button__green/Button";
import { useSpecilaists } from "../../shared/store";
import { Link } from "react-router-dom";
import { LinkBtn } from "../../shared/ui/Link/Link";
import { FC } from "react";

export const SpecilalistBlock: FC = () => {
    const specialists = useSpecilaists((state) => state.specialists);
    return (
        <div className={c.block}>
            {specialists.map(specialist =>
                <div key={specialist.id} className={c.block__item}>
                    <img src={specialist.img} className={c.img} />
                    <p className={c.block__item_about}>{specialist.about}</p>
                    <p className={c.block__item_header}>{specialist.name}</p>
                    <Button width={"100%"}>Записаться</Button>
                    <LinkBtn width='100%'><Link key={specialist.id} to={`/specialists/${specialist.param}`}>
                        подробнее
                    </Link></LinkBtn>
                </div>
            )}
        </div>
    )
}