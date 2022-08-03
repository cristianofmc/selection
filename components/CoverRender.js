import Image from 'next/image'
import { useEffect, useState } from 'react';

const CoverRender = (props) => {
    const [displayimage, setDisplayimage] = useState(true);

    let cover_url = props.children.html_url.replace("https://github.com/", "https://raw.githubusercontent.com/");
    cover_url += `/${props.children.default_branch}/_docs/cover.webp`;

    return (
        <div className={`overflow-hidden ${displayimage ? `block` : `hidden`}`}>
            <Image className="relative w-full h-40 object-cover rounded-t-md"  src={cover_url} width="600" height="400"  onError={() => setDisplayimage(false)}></Image>
        </div>
    );
};

export default CoverRender;