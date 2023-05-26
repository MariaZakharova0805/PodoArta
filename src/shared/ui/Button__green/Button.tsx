import { FC, MouseEventHandler } from "react"
import c from "./Button.module.css"


type ChildProp = {
    children: string,
    width: string,
    borderRadius?: string,
    margin?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ChildProp> = ({ children, width, borderRadius, margin, onClick }) => {
    return (
        <button onClick={onClick} className={c.btn} style={{ width, borderRadius, margin }}>{children}</button>
    )
}
