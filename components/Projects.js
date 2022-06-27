
import CoverRender  from './CoverRender';

const Projects = (props) => {

    return (
        <div id="projects" className="pt-3">
            <ul key="1" className="mx-4 grid sm:grid-cols-2 md:grid-cols-4  gap-y-10 gap-x-6">
                {
                    props.children.map((data, index) => {

                        let cover_url = data.html_url.replace("https://github.com/", "https://raw.githubusercontent.com/");
                        cover_url += `/${data.default_branch}/_docs/cover.webp`;

                        return <li key={data.id} className="mx-2 rounded-lg border border-zinc-500">

                            <div className="overflow-hidden">
                                <CoverRender>{cover_url}</CoverRender>
                            </div>

                            <div className="px-4 pt-3">
                                <h1 className="font-bold">{data.name}</h1>
                                <p>{data.description}</p>
                            </div>

                            {data.topics.map((tag) => {
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