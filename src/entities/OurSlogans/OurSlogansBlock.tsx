import c from "./OurSlogansBlock.module.css";
import { useSlogan } from "../../shared/store";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";

export const OurSlogansBlock = () => {
    const { slogans } = useSlogan((state) => state);

    return (
        <div className={c.block}>{slogans.map(slogan =>
            <div key={slogan.id} className={c.block_item}>
                <div className={c.block__item_img}>{slogan.icon}</div>
                <div className={c.block__item_text}>
                    <HeaderH2>{slogan.name}</HeaderH2>
                    <p>{slogan.text}</p>
                </div>
            </div>)
        }</div>
    )
}