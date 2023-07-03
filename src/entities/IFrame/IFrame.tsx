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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7289700609786!2d37.59670609487763!3d55.78057892048332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a10adb92ce3%3A0x679a953cbf270f71!2z0KHRg9GJ0LXQstGB0LrQsNGPINGD0LsuLCA5LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MDU1!5e0!3m2!1sru!2skz!4v1688360693936!5m2!1sru!2skz"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </div>

    )
}

export default IFrame
