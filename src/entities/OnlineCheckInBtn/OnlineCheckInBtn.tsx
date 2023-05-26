import { solineLink } from "../../shared/constants";
import { Button } from "../../shared/ui/Button__green/Button";
import c from "./OnlineCheckInBtn.module.css";
export const OnlineCheckInBtn = () => {
  return (
    <div className={c.center}>
      <a href={solineLink} target="_blank">
        <Button width="300px" margin="40px auto">
          онлайн запись
        </Button>
      </a>
    </div>
  );
};
