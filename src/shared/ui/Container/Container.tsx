import { FC } from "react"
import c from "./Container.module.css"

type ContainerProp = {
    children: JSX.Element | JSX.Element[],
    margin?: string,
    padding?: string,
    marginTop?:string,
}

export const Container: FC<ContainerProp> = ({ children, margin, padding, marginTop }) => {
    return (
        <div className={c.container} style={{margin, padding, marginTop}}>{children}</div>
    )
}
