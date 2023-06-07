import { Button } from "../../shared/ui/Button__sort/Button"
import { useServecies } from "../../shared/store";
export const ServiseBtns = () => {
    const { categories } = useServecies((state) => state)
    return (
        <div>{categories.map(cat => <Button key={cat.id} category={cat.category}>{cat.name}</Button>)}</div>
    )
}