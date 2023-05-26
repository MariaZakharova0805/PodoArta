import { FC } from "react"
import c from "./header.module.css";
type ChildProp = {
    children: string
}

export const HeaderH2: FC<ChildProp> = ({ children }) => {
    return (
        <h1 className={c.h2}>
        {children}
    </h1>
    )
}
