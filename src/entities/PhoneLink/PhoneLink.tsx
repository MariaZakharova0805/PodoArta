import c from "./PhoneLink.module.css";
import { contacts } from "../../shared/constants";
export const PhoneLink = () => {
  const phone = contacts[0];
  return (
    <a href={phone.link}>
      <div className={c.phone}>
        <div className={c.mobile}>
          <div className={c.mobile_btn}></div>
        </div>
        <p>{phone.details}</p>
      </div>
    </a>
  );
};
