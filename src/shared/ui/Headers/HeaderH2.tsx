import { forwardRef } from "react";
import { motion } from "framer-motion";
import c from "./header.module.css";

type ChildProp = {
    children: string
}

export type Ref = HTMLHeadingElement;

export const HeaderH2 = forwardRef<Ref, ChildProp>(({ children }, ref) => {
    return (
        <h1 ref={ref} className={c.h2}>
            {children}
        </h1>)
});


export const MHeaderH2 = motion(HeaderH2);