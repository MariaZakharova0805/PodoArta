import { ServeceItem } from "../../entities/ServiceItem/ServeceItem";
import { useServecies } from "../../shared/store";
import { ServiceAbout } from "../../widgets/ServiceAbout/ServiceAbout";

export const ServiseList = () => {
  const { servecies, activeCategory } = useServecies((state) => state);
  return (
    <>
      <ServiceAbout />
      <div>
        {servecies.map((service) => {
          if (activeCategory === service.category) {
            return (
              <ServeceItem
                name={service.name}
                price={service.price}
                key={service.id}
                link={service.link}
              />
            );
          } else if (activeCategory === "all") {
            return (
              <ServeceItem
                name={service.name}
                price={service.price}
                key={service.id}
                link={service.link}
              />
            );
          }
        })}
      </div>
    </>
  );
};
