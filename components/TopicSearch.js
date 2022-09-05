import SearchIcon from "./Icons/SearchIcon";
import Topic from "./Topic";


const TopicSearch = ({onKeyDown, tags, onRemove}) => {
    // limits: 4 tags
    // one tag 24
    // al  tags somados > 20
    return(
        <div className="mx-4 ">
                <div className="grid lg:gap-x-8 lg:grid-cols-4 sm:grid-cols-2 ">
                    <div className="lg:col-start-2 lg:col-end-4 sm:col-start-1 sm:col-end-3">
                        <div className="h-12 flex flex-wrap w-full text-sm text-black/85 rounded-full border border-neutral-300 hover:shadow hover:shadow-neutral-800/20 focus:shadow focus:shadow-neutral-800/20 ">    
                            <div className=" inline-block flex-wrap mt-3.5 mb-1 ml-4 items-center  pointer-events-none">
                                <SearchIcon className="w-5 h-5  text-gray-500 dark:text-gray-400"/>
                            </div>
                            <div className="inline flex-wrap mb-1 overflow-hidden max-w-sm">
                                <Topic close={true} onRemove={onRemove}>{tags}</Topic>
                            </div>
                            <input type="text" id="tag-search" onKeyDown={onKeyDown}
                            className="outline-none  grow rounded-full" 
                            placeholder="Search Tags" required/>
                        </div> 
                    </div>
                </div>
        </div>
    );
};

export default TopicSearch;