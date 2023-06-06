import { FC } from "react"
import c from "./ContainerBlock.module.css"

type ContainerProp = {
    children: JSX.Element | JSX.Element[],
    background?: string,
}

export const ContainerBlock: FC<ContainerProp> = ({ children, background }) => {
    return (
        <div className={c.container} style={{background}}>{children}</div>
    )
}
