
import { useState } from 'react';
import CoverRender  from './CoverRender';
import Modal from './Modal';
import Tag from './Tag';

const Projects = (props) => {

    const [modalOn, setModalOn] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOnOpen = () => {
        document.body.classList.add("overflow-y-hidden");
        setModalOn(true);

    }
    const handleOnClose = () => {
        document.body.classList.remove("overflow-y-hidden");
        setModalOn(false);
    }

    return (
        <div id="projects" className="py-3">
            <ul key="1" className="mx-4 grid sm:grid-cols-2 md:grid-cols-4  gap-y-10 gap-x-6">
                {
                    props.children.map((data, index) => {
                        return <li id={data.id} key={data.id} className="mx-2 rounded-lg border border-neutral-300">
                            <div className="overflow-hidden cursor-pointer" 
                            onClick={() => {setModalData(data); handleOnOpen();} }>

                                <CoverRender width="600" height="400" >{data}</CoverRender>
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
            <Modal onClose={handleOnClose} visible={modalOn} modalData={modalData}/>
        </div>
    );
};

export default Projects;