import { FC } from "react"
import c from "./ContainerGreen.module.css"

type ContainerProp = {
    children: JSX.Element | JSX.Element[],
    margin?: string,
    padding?: string,
}

export const ContainerGreen: FC<ContainerProp> = ({ children, margin, padding }) => {
    return (
        <div className={c.container} style={{margin, padding}}>{children}</div>
    )
}
