import { FC, useEffect, useState } from "react"

import c from "./ServeceItem.module.css"
import { Button } from "../../shared/ui/Button__green/Button"
type ChildProp = {
    name: string,
    price: number | string,
}

export const ServeceItem: FC<ChildProp> = ({ name, price }) => {

    const hrefText = `https://wa.me/79162869949?text=Здравствуйте,%20хочу%20записаться%20на%20услугу%20"${name}"%20.`
    return (
        <div className={c.item}>
            <h4>{name}</h4>
            <p>{price} P</p>
            <Button width="120px" borderRadius="150px">
                <a href={hrefText} target="_blank"
                >записаться</a>
            </Button>
        </div>
    )
}
