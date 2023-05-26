import { ServeceItem } from "../../entities/ServiceItem/ServeceItem"
import { useServecies } from "../../shared/store";

export const ServiseList = () => {
    const { servecies, activeCategory } = useServecies((state) => state)
    return (
        <div>{servecies.map(service => {
            if (activeCategory === service.category) { return <ServeceItem name={service.name} price={service.price} key={service.id} /> }
            else if (activeCategory === 'all') {
                return <ServeceItem name={service.name} price={service.price} key={service.id} />
            }
        }
        )}</div>
    )
}