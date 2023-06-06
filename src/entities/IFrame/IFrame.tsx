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
                src="https://yandex.kz/map-widget/v1/org/podoarta/183344334290/?ll=37.620510%2C55.793343&utm_source=review&z=16"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </div>

    )
}

export default IFrame