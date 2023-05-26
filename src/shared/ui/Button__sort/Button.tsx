import React, { FC } from "react"
import c from "./Button.module.css"
import { useServecies } from "../../store";
type ChildProp = {
    children: string,
    category: string,
}
export const Button: FC<ChildProp> = ({ children, category }) => {
    const { activeCategory, setActiveCategory } = useServecies((state) => state)
   
    const chooseCategory = (_e:React.MouseEvent<HTMLButtonElement>) => {
        setActiveCategory(category)
    }

    return (
        <button onClick={chooseCategory} className={activeCategory === category ? c.btn_active : c.btn} >{children}</button>
    )
}
