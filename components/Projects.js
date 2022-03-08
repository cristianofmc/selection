const Projects = (props) => {
    return(
        <div id="projects" className="pt-3">
            <ul className="mx-4 grid sm:grid-cols-2 md:grid-cols-4  gap-y-10 gap-x-6">
                {
                    props.children.map((data) => {
                        return  <li className="mx-2 rounded-lg border border-zinc-500">
                                    <div className="overflow-hidden ">
                                        <img className="relative w-full h-40 object-cover rounded-t-md" src="https://tm.ibxk.com.br/2021/03/08/08105041400097.jpg?ims=1200x675"></img>
                                    </div>
                                    <div className="px-4 pt-3">
                                        <h1 className="font-bold">{data.name}</h1>
                                        <p>{data.description}</p>
                                    </div>
                                    { data.topics.map((tag) => {
                                        <div className="px-2.5 pt-1.5 pb-3.5">
                                            <a className="border border-zinc-500 inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-2 mr-1.5 mt-1.5" href="/">
                                                {tag}
                                            </a>
                                        </div>
                                    })}
                                </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Projects;