import configData from '../lib/config.json'

const Topic = (props) => {

    var keyTag = configData.KEY_TAG;
    var tagsArray = props.children.filter(function(value){ 
        return value != keyTag;
    });

    return(
        <div className="px-2.5 py-5px overflow-hidden">
            {tagsArray.map((tag, index) => (
                <div key={`tag-${index}`} className="overflow-hidden tracking-widestPlus sm:text-sm text-xs leading-5 text-zinc-700 bg-black bg-opacity-[.08] inline-flex items-center h-6 rounded-full whitespace-nowrap mr-1.5 mt-1.5">
                    <div className={`py-3px ${props.close ? `pl-5px pr-1` : `px-5px `}`}>
                        <span className='p-0.5 text-ellipsis overflow-hidden'>{tag}</span>
                    </div>
                    <span onClick={() => {props.onRemove(index)}} 
                    className={`cursor-pointer py-px px-2 rounded-full hover:bg-black hover:bg-opacity-[.20] ${props.close ? `block` : `hidden`}`}>&times;</span>
                </div>
            ))
            }
        </div>
    );
};

export default Topic;