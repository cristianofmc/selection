import Image from 'next/image'
import { useEffect, useState } from 'react';

const CoverRender = (props) => {
    const [displayimage, setDisplayimage] = useState(true);
    return (
        <div className={`overflow-hidden ${displayimage ? `block` : `hidden`}`}>
            <Image className="relative w-full h-40 object-cover rounded-t-md"  src={props.children} width="600" height="400"  onError={() => setDisplayimage(false)}></Image>
        </div>
    );
};

export default CoverRender;