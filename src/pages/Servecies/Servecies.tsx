import { Container } from "../../shared/ui/Container/Container";
import { ServiseList } from "./ServiceList";
import { ServiseBtns } from "../../widgets/ServiseBtns/ServiseBtns";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
import c from "./Sevecies.module.css";
export const Servecies = () => {
  return (
    <Container>
      <HeaderH2 textAlign="center">Услуги</HeaderH2>
      <ServiseBtns />
      <ServiseList />
      <div
        className={c.scrollToTop}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        наверх
      </div>
    </Container>
  );
};
