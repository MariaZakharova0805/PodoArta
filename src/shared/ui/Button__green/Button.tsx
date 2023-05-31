import { MouseEventHandler, ReactElement, forwardRef } from "react"
import c from "./Button.module.css"
import { motion } from "framer-motion"


type ChildProp = {
    children: string | ReactElement,
    width: string,
    borderRadius?: string,
    margin?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export type Ref = HTMLButtonElement;
// { children, width, borderRadius, margin, onClick },
//style={{props.width, props.borderRadius, props.margin }}

export const Button = forwardRef<Ref, ChildProp>(({ onClick, width, borderRadius, margin, children }, ref) => {
    return (
        <button ref={ref} onClick={onClick} style={{ width, borderRadius, margin }} className={c.btn} >{children}</button>
    )
});

export const MButton = motion(Button);