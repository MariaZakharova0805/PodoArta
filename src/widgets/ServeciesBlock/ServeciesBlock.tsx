import { Link } from "react-router-dom";
import { useServecies } from "../../shared/store";
import c from './ServeciesBlock.module.css'

export const ServeciesBlock = () => {
  const { categories, setActiveCategory } = useServecies((state) => state);

  return (
    <div
      className={c.block}>{
        categories.map(item => {
          if (item.category != "all")
            return (
              <Link to="./servecies" key={item.id}>
                <div className={c.block__bg}>
                  <div onClick={() => setActiveCategory(item.category)} className={c.block__item}
                    style={{ backgroundImage: `url(${item.img})` }}>
                    <div className={c.block__item_name}><p className={c.block__item_header}>{item.name}</p><p>{item.details}</p></div>
                  </div></div>
              </Link>
            )
        })}
    </div>
  )
}