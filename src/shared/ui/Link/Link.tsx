import { FC, ReactElement } from "react"
import c from "./Link.module.css"
type ChildProp = {
    children: ReactElement
    width?: string,
}

export const LinkBtn: FC<ChildProp> = ({ children, width }) => {
    return (
        <button className={c.btn} style={{width}}>{children}</button>
    )
}
