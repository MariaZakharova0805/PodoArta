import { LazyLoadImage  } from 'react-lazy-load-image-component';
import { FC } from "react";

type DiplomasProps = {
    diplomas: string[],
}

export const Diplomas: FC<DiplomasProps> = ({ diplomas }) => {
    return (
        <div >{diplomas.map(diploma => <LazyLoadImage src={diploma} key={diploma}
            alt="diploma"
        />)}</div>
    )
}



