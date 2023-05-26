import { SvgComponent } from "../../shared/HomeSvgElector/SvgComponent"
import c from "./Footer.module.css"

export const PaymentBlock = () => {
  return (
    <div className={c.payment}>
        <p className={c.header}>Принимаем к оплате:</p>
        <div className={c.payment_icons}>
            <SvgComponent id="visaC"/>
            <SvgComponent id="masterC"/>
            <SvgComponent id="mirC"/>
        </div>
    </div>
  )
}

export default PaymentBlock