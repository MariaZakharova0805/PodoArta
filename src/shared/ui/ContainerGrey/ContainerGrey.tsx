import { FC } from "react"
import c from "./ContainerGrey.module.css"
type ContainerProp = {
    children: JSX.Element | JSX.Element[]
}

export const ContainerGrey: FC<ContainerProp> = ({ children }) => {
    return (
        <div className={c.block}>{children}</div>
    )
}
