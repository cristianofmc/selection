import configData from '../lib/config.json';
import { useMemo } from 'react';

const Topic = ({ children, close, onRemove }) => {
    const keyTag = configData.KEY_TAG;

    // Usar useMemo para evitar recomputação de tagsArray a cada renderização
    const tagsArray = useMemo(() => children.filter(value => value !== keyTag), [children, keyTag]);

    return (
        <div>
            {tagsArray.map((tag, index) => (
                <div
                    key={tag}
                    className="overflow-hidden tracking-widestPlus sm:text-sm text-xs leading-5 text-topic-black bg-black/[.08] border border-transparent
                    dark:border-topic-border-dark-grey/[.54] dark:text-white-dark dark:bg-transparent 
                    inline-flex items-center h-6 rounded-full whitespace-nowrap mr-1.5 mt-1.5"
                >
                    <div className={`py-3px ${close ? 'pl-5px pr-px' : 'px-5px'}`}>
                        <span className="px-0.5 py-1 text-ellipsis overflow-hidden leading-5">{tag}</span>
                    </div>
                    <button
                        onClick={() => onRemove(index)}
                        aria-label="Remove tag" 
                        className={`cursor-pointer py-px px-2 rounded-full border border-transparent hover:bg-black hover:bg-opacity-[.20] focus:outline-none focus:bg-black focus:bg-opacity-[.20]
                        dark:hover:border-border-dark-grey dark:focus:border-border-dark-grey dark:hover:bg-dark-black dark:focus:bg-dark-black 
                        dark:focus:border-topic-border-dark-grey/[.54] ${close ? 'block' : 'hidden'}`}
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Topic;
