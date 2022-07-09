
import CoverRender  from './CoverRender';
import Tag from './Tag';

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
                            
                            <Tag>{data.topics}</Tag>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Projects;