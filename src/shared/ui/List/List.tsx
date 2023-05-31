import { FC } from 'react'
import c from "./List.module.css"
import { v1 as uuidv1 } from 'uuid';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import { motion } from "framer-motion"
import { goLeftAnimation } from '../../animation';

type ListProp = {
  list: string[],
}

export const List: FC<ListProp> = ({ list}) => {
  return (<motion.ul
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2, once: true }}
    className={c.list}>
    {list.map((item, num) => <motion.li custom={num++} variants={goLeftAnimation} key={uuidv1()} className={c.list__item}>
      <span className={c.icon}><AdjustRoundedIcon /></span>
      {item}</motion.li>)}
  </motion.ul>)
}