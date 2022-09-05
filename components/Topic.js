import configData from '../lib/config.json'

const Topic = (props) => {

    var keyTag = configData.KEY_TAG;
    var tagsArray = props.children.filter(function(value){ 
        return value != keyTag;
    });

    return(
        <div className="px-2.5 py-1.5 overflow-hidden">
            {tagsArray.map((tag, index) => (
                <div key={`tag-${index}`} className="overflow-hidden bg-black bg-opacity-[.08] inline-flex items-center h-6 rounded-full text-sm text-zinc-700 whitespace-nowrap ml-1.5 mt-1.5">
                    <span className={`${props.close ? `pl-2 pr-1` : `px-2`}`}>{tag}</span>
                    <span onClick={() => {props.onRemove(index)}} 
                    className={`cursor-pointer py-px px-2 rounded-full hover:bg-black hover:bg-opacity-[.20] ${props.close ? `block` : `hidden`}`}>&times;</span>
                </div>
            ))
            }
        </div>
    );
};

export default Topic;