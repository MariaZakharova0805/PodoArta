import { FC } from "react"
import c from "./header.module.css"

type HeaderH1Prop = {
    children: string,
    marginBottom?: string,
}

export const HeaderH1: FC<HeaderH1Prop> = ({ children, marginBottom }) => {
    return (
        <h1 className={c.h1} style={{marginBottom}}>
            {children}
        </h1>
    )
}
