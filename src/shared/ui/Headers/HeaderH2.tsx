import { FC } from "react";
import c from "./header.module.css";

type HeaderH2Prop = {
    children: any,
    textAlign?: 'left' | 'right' | 'center',

}

export const HeaderH2: FC<HeaderH2Prop> = ({ children, textAlign }) => {
    return (
        <h2 className={c.h2} style={{ textAlign }}>
            {children}
        </h2>
    )
}

