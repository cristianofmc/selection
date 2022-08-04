
import { useState } from 'react';
import CoverRender  from './CoverRender';
import Modal from './Modal';
import Tag from './Tag';

const Projects = (props) => {

    const [modalOn, setModalOn] = useState(false);

    const handleOnOpen = () => setModalOn(true);
    const handleOnClose = () => setModalOn(false);

    return (
        <div id="projects" className="pt-3">
            <ul key="1" className="mx-4 grid sm:grid-cols-2 md:grid-cols-4  gap-y-10 gap-x-6">
                {
                    props.children.map((data, index) => {
                        return <li key={data.id} className="mx-2 rounded-lg border border-zinc-500">
                            <div className="overflow-hidden cursor-pointer" onClick={handleOnOpen}>
                                <CoverRender>{data}</CoverRender>
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
            <Modal onClose={handleOnClose} visible={modalOn} />
        </div>
    );
};

export default Projects;