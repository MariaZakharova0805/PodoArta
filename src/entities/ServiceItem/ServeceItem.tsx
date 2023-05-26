import { FC } from "react"

import c from "./ServeceItem.module.css"
import { Button } from "../../shared/ui/Button__green/Button"
type ChildProp = {
    name: string,
    price: number | string,
}

export const ServeceItem: FC<ChildProp> = ({ name, price }) => {
    return (
        <div className={c.item}>
            <h4>{name}</h4>
            <p>{price} P</p>
            <Button width="120px" borderRadius="150px">записаться</Button>
            </div>
    )
}
