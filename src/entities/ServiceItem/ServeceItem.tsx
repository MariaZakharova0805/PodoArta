import { FC } from "react";
import c from "./ServeceItem.module.css";
import { Button } from "../../shared/ui/Button__green/Button";
type ChildProp = {
  name: string;
  price: number | string;
  link?: string;
};

export const ServeceItem: FC<ChildProp> = ({ name, price, link }) => {
  return (
    <div className={c.item}>
      <h4>{name}</h4>
      <p>
        от {price}
        {name === "Изготовление индивидуальных ортозов" ? (
          <span> р/гр</span>
        ) : (
          <span> Р</span>
        )}
      </p>
      <a href={link} target="_blank">
        <Button borderRadius="150px">записаться</Button>{" "}
      </a>
    </div>
  );
};
