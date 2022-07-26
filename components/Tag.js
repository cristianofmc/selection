const Tag = (props) => {
    return(
        <div className="px-2.5 pt-1.5 pb-3.5">

            {props.children.map((tag) => (
                <a className="border border-zinc-500 inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-2 mr-1.5 mt-1.5" href="/">{tag}</a>
            ))
            }

        </div>
    );
};

export default Tag;