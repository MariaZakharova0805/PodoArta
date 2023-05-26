import { FC } from 'react'
import c from "./List.module.css"
import uuid from "react-uuid";
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';

type ListProp = {
  list: string[]
}

export const List: FC<ListProp> = ({ list }) => {
  return (<ul className={c.list}>
    {list.map(item => <li key={uuid()} className={c.list__item}>
      <span className={c.icon}><AdjustRoundedIcon /></span>
      {item}</li>)}
  </ul>)
}