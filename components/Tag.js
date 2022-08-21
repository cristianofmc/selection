const Tag = (props) => {
    return(
        <div className="px-2.5 py-1.5 ">

            {props.children.map((tag, index) => (
                <div key={`tag-${index}`} className="bg-black bg-opacity-[.08] inline-flex items-center h-6 rounded-full text-sm text-zinc-700 whitespace-nowrap px-2 mr-1.5 mt-1.5">
                    <a className="p-px" href="/">{tag}</a>
                </div>
            ))
            }

        </div>
    );
};

export default Tag;