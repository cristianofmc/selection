import SearchIcon from "./Icons/SearchIcon";
import Topic from "./Topic";
import React, { useContext, useEffect, useRef } from "react";
import TopicContext from "../lib/topicContext";

const TopicSearch = () => {
    const [topicSearch, setTopicSearch] = useContext(TopicContext);
    const inputRef = useRef(null); 

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") return;

        const value = e.target.value.trim().toLowerCase();
        if (!value || topicSearch.includes(value)) return;

        setTopicSearch(prevState => [...prevState, value]);
        inputRef.current.value = "";
    };

    const removeTagByIndex = (index) => {
        setTopicSearch(prevState => prevState.filter((_, i) => i !== index));
    };

    const scrollElement = useRef(null);

    const scrollToEnd = () => {
        const element = scrollElement.current;
        if (element) {
            element.scrollLeft += element.scrollWidth;
        }
    };

    useEffect(() => {
        scrollToEnd();
    }, [topicSearch]);

    return (
        <div className="mx-4">
            <div className="grid lg:gap-x-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="overflow-hidden lg:col-start-2 lg:col-end-4 sm:col-start-1 sm:col-end-3 p-1">
                    <div className="max-h-16 min-h-full flex items-center text-sm text-black/85 z-40 rounded-full border border-border-gray
                         hover:shadow hover:shadow-neutral-800/20 focus-within:shadow focus-within:shadow-neutral-800/20
                        dark:border-project-dark-border dark:hover:bg-button-hero-black dark:border-border-dark-grey dark:focus-within:bg-button-hero-black">    
                        <div aria-hidden="true" className="grow-0 inline-block flex-wrap  ml-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div ref={scrollElement}
                            className="scroll-smooth items-center pl-2 pb-1.5 inline-flex shink-0 flex-initial whitespace-nowrap overflow-x-auto overflow-y-hidden">
                            <Topic close={true} onRemove={removeTagByIndex}>{topicSearch}</Topic>
                        </div>
                        <input 
                            aria-label="Input the technologies to filter projects" 
                            type="search" 
                            id="tag-search" 
                            ref={inputRef}
                            onKeyDown={handleKeyDown} 
                            className="bg-transparent h-12 pl-3 lowercase outline-none flex-grow flex-shrink-0 overflow-clip basis-32 rounded-full"
                            maxLength="23"
                            autoComplete="off"
                            placeholder="Search Tags" 
                            required
                        />                                
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default TopicSearch;
