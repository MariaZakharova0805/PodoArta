import c from "./OurSlogansBlock.module.css";
import { useSlogan } from "../../shared/store";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import { motion } from "framer-motion"
import { goDownAnimation } from "../../shared/animation";

export const OurSlogansBlock = () => {
    const { slogans } = useSlogan((state) => state);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={c.block}>{slogans.map((slogan, num) =>
                <motion.div
                    custom={num++} variants={goDownAnimation}
                    key={slogan.id} className={c.block_item}>
                    <div className={c.block__item_img}>{slogan.icon}</div>
                    <div className={c.block__item_text}>
                        <HeaderH2>{slogan.name}</HeaderH2>
                        <p>{slogan.text}</p>
                    </div>
                </motion.div>)
            }</motion.div>
    )
}