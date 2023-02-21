import Image from 'next/image'
import { useEffect, useState } from 'react';

const CoverRender = (props) => {
    let cover_url = props.children.html_url.replace("https://github.com/", "https://raw.githubusercontent.com/");
    cover_url += `/${props.children.default_branch}/_docs/cover.webp`;

    return (
        <div className={'overflow-hidden'}>
            <Image alt="" className="relative w-full object-cover rounded-t-md"  src={cover_url} width={props.width} height={props.height}></Image>
        </div>
    );
};

export default CoverRender;