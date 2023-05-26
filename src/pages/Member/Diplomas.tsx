import { LazyLoadImage  } from 'react-lazy-load-image-component';
import { FC } from "react";
import uuid from "react-uuid";

type DiplomasProps = {
    diplomas: string[],
}

export const Diplomas: FC<DiplomasProps> = ({ diplomas }) => {
    return (
        <div >{diplomas.map(diploma => <LazyLoadImage src={diploma} key={uuid()}
            alt="diploma"
        />)}</div>
    )
}



