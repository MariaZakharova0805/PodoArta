import Iframe from "react-iframe";
import c from "./IFrame.module.css"
import { FC } from "react";

interface InterfaceIframe {
    url?: string;
    src?: string;
    loading?: string;
    referrerpolicy?: string;
}


const IFrame: FC<InterfaceIframe> = () => {
    return (
        <div className={c.iframe}>
            <Iframe
                url=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.5634996929693!2d37.208071477170506!3d55.609610103010915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b556db6c250621%3A0x3cb3312d72f72022!2z0YPQuy4g0J_Rg9GI0LrQuNC90LAsINCi0L7Qu9GB0YLQvtC_0LDQu9GM0YbQtdCy0L4sINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxNDMzNTA!5e0!3m2!1sru!2skz!4v1684225051247!5m2!1sru!2skz"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </div>

    )
}

export default IFrame