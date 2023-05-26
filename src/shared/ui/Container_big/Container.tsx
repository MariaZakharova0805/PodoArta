import { FC } from "react"
import c from "./Container.module.css"
type ContainerProp = {
    children: JSX.Element | JSX.Element[]
    margin?:string
}

export const Container: FC<ContainerProp> = ({ children, margin }) => {
    return (
        <div className={c.container} style={{margin}}>{children}</div>
    )
}
