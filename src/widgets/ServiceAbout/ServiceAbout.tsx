import { useServecies } from "../../shared/store";
import { servicies } from "./constants";
export const ServiceAbout = () => {
  const { activeCategory } = useServecies((state) => state);
console.log(servicies)
  return (
    <>
      {servicies.map((serv) => (
        <div key={serv.id}>
          {serv.category === activeCategory ? serv.description : null}
        </div>
      ))}
    </>
  );
};
