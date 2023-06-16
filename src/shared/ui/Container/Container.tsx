import { FC } from "react"
import c from "./Container.module.css"

type ContainerProp = {
    children: JSX.Element | JSX.Element[],
    padding?: string,
}

export const Container: FC<ContainerProp> = ({ children, padding }) => {
    return (
        <div className={c.container} style={{ padding }}>{children}</div>
    )
}
