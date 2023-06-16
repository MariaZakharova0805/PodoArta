import { FC } from "react";
import c from "./header.module.css";

type HeaderH2Prop = {
    children: any,
    padding?: string,
    margin?: string,
    textAlign?: 'left' | 'right' | 'center',
}

export const HeaderH2: FC<HeaderH2Prop> = ({ children, margin, padding, textAlign }) => {
    return (
        <h2 className={c.h2} style={{ margin, padding, textAlign }}>
            {children}
        </h2>
    )
}

