import { Container } from "../../shared/ui/Container_big/Container"
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/Button__green/Button";
import c from "./ErrorPage.module.css"
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";
const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div id="error-page" className={c.error}>
        <HeaderH2>Упс!</HeaderH2>
        <p>Что-то пошло не так...</p>
        <p>Пожалуй, лучше вернуться на главную.</p>
        <Link to={`/`}><Button width={"200px"}>вернуться на главную</Button></Link>
      </div>
    </Container>

  )
}

export default ErrorPage