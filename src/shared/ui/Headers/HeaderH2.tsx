import { FC } from "react";
import c from "./header.module.css";

type HeaderH2Prop = {
    children: string,
    marginBottom?: string,
    marginTop?: string,
}

export const HeaderH2: FC<HeaderH2Prop> = ({ children, marginBottom, marginTop }) => {
    return (
        <h2 className={c.h2} style={{ marginBottom, marginTop }}>
            {children}
        </h2>
    )
}

