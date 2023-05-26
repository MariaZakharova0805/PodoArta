import { FC } from 'react'
import c from "./List.module.css"
import { v1 as uuidv1 } from 'uuid';
import foot from "../../../../public/icons/footLeft.png"

type ListProp = {
  list: string[],
}

export const List: FC<ListProp> = ({ list }) => {
  return (<ul className={c.list}>
    {list.map(item => <li key={uuidv1()} className={c.list__item}>
      <img src={foot}/><p className={c.list__item_text}>{item}</p>
    </li>)}
  </ul>)
}