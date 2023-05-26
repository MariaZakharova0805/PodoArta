import { FC } from "react"
import c from "./ContainerBlock.module.css"



type ContainerProp = {
    children: JSX.Element | JSX.Element[],
}

export const ContainerBlock: FC<ContainerProp> = ({ children }) => {
    return (
        <div className={c.container} style={{

        }}>{children}</div>
    )
}
