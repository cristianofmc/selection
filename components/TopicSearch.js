import SearchIcon from "./Icons/SearchIcon";
import Topic from "./Topic";
import { useState, useEffect } from 'react';

const TopicSearch = ({onKeyDown, tags, onRemove}) => {

    const [displayInput, setDisplayInput] = useState(true);

    let sumTagsLength = 0;
    for (const tag of tags) sumTagsLength += tag.length;
    
    return(
        <div className="mx-4">
                <div className="grid lg:gap-x-8 lg:grid-cols-4 sm:grid-cols-2 ">
                    <div className="overflow-hidden lg:col-start-2 lg:col-end-4 sm:col-start-1 sm:col-end-3">
                        <div className="h-12 flex flex-nowrap overflow-hidden w-full text-sm text-black/85 rounded-full border border-neutral-300 hover:shadow hover:shadow-neutral-800/20 focus:shadow focus:shadow-neutral-800/20 ">    
                            <div className="grow-0 inline-block flex-wrap mt-3.5 mb-1 ml-3 items-center  pointer-events-none">
                                <SearchIcon className="w-5 h-5  text-gray-500 dark:text-gray-400"/>
                            </div>
                            <div className="flex-nowrap shrink-0 mb-1 overflow-hidden">
                                <Topic close={true} onRemove={onRemove}>{tags}</Topic>
                            </div>
                            {   
                                (tags.length < 3 && sumTagsLength < 36) &&

                                <input type="text" id="tag-search" onKeyDown={onKeyDown}
                                className={`outline-none grow shrink-0 overflow-hidden flex-wrap break-inside-avoid basis-20 rounded-full ${displayInput ? `inline` : `hidden`}`}
                                maxLength="23"
                                placeholder="Search Tags" required/>                                
                            }
                        </div> 
                    </div>
                </div>
        </div>
    );
};

export default TopicSearch;