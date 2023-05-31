import { useServecies } from "../../shared/store";
import c from './ServeciesBlock.module.css'
import { motion } from "framer-motion"
import { goDownAnimation } from "../../shared/animation"

export const ServeciesBlock = () => {
    const { servecies } = useServecies((state) => state);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={c.block}>{
                servecies.map((item, num) => {
                    if (item.popular === true) return <motion.div custom={num++} variants={goDownAnimation} key={item.id} className={c.block__item}
                        style={{
                            backgroundImage: `url(${item.imgMain})`
                        }}
                    >
                        <p className={c.block__item_name}>{item.name}</p>
                    </motion.div>
                }
                )}
        </motion.div>
    )
}