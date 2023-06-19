import { FC } from "react"
import c from "./Container.module.css"

type ContainerProp = {
    children: JSX.Element | JSX.Element[],

}

export const Container: FC<ContainerProp> = ({ children }) => {
    return (
        <div className={c.container}>{children}</div>
    )
}
