import { FC, ReactElement } from "react"
import c from "./Link.module.css"
type ChildProp = {
    children: ReactElement
    width?: string,
}

export const LinkBtn: FC<ChildProp> = ({ children, width }) => {
    return (
        <a className={c.link} style={{width}}>{children}</a>
    )
}
