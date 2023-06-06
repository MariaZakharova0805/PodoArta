import { FC } from "react"
import c from "./ServeceItem.module.css"
import { Button } from "../../shared/ui/Button__green/Button"
type ChildProp = {
    name: string,
    price: number | string,
    link: any,
}

export const ServeceItem: FC<ChildProp> = ({ name, price, link }) => {
    return (
        <div className={c.item}>
            <h4>{name}</h4>
            <p>{price} P</p>
            <Button width="150px" borderRadius="150px">
                <a href={link} target="_blank"
                >записаться</a>
            </Button>
        </div>
    )
}
