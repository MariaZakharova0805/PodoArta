import c from "./SpecialistsBlock.module.css";
import { Button } from "../../shared/ui/Button__green/Button";
import { useSpecilaists } from "../../shared/store";
import { Link } from "react-router-dom";
import { LinkBtn } from "../../shared/ui/Link/Link";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const SpecilalistBlock: FC = () => {
  const specialists = useSpecilaists((state) => state.specialists);
  return (
    <div
      className={c.block}>
      {specialists.map(specialist =>
        <div
          key={specialist.id} className={c.item}>
          <LazyLoadImage src={specialist.img} alt={specialist.param} className={c.item_image} />
          <div className={c.item_descrition}>
            <div className={c.item_text}>
              <p className={c.item_text_about}>{specialist.about}</p>
              <p className={c.item_text_name}>{specialist.name}</p>
            </div>
            <div className={c.item_links}>
              <Button width={"100%"}>
                <a href={`https://wa.me/79998747811?text=Здравствуйте.%20Хочу%20записаться%20на%20прием%20к%20специалисту%20${specialist.name}.%0D%0A`} target="_blank">
                  Записаться на прием</a>
              </Button>
              <LinkBtn width='100%'><Link key={specialist.id} to={`/specialists/${specialist.param}`}>
                подробнее
              </Link></LinkBtn>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}