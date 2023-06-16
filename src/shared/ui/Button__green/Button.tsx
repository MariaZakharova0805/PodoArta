import { MouseEventHandler, ReactElement, forwardRef } from "react"
import c from "./Button.module.css"
import { motion } from "framer-motion"

type ChildProp = {
    children: string | ReactElement,
    width?: string,
    height?: string,
    borderRadius?: string,
    margin?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ChildProp>(({ onClick, width, height, borderRadius, margin, children }, ref) => {
    return (
        <button ref={ref} onClick={onClick} style={{ width, height, borderRadius, margin }} className={c.btn} >{children}</button>
    )
});

export const MButton = motion(Button);