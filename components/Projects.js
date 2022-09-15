
import { useState } from 'react';
import CoverRender  from './CoverRender';
import Modal from './Modal';
import Topic from './Topic';
import NoResults from './NoResults';

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

    if(!props.children.length) return <NoResults/>

    return (
        <div id="projects" className="py-3">
            <ul key="1" className="mx-2 md:mx-4 grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
                {
                    props.children.map((data, index) => {
                        return <li focus-within id={data.id} key={data.id} className="rounded-lg border border-neutral-300">
                            <div className="overflow-hidden cursor-pointer" 
                            onClick={() => {setModalData(data); handleOnOpen();} }>
                                <CoverRender width="600" height="400">{data}</CoverRender>
                            </div>

                            <div className="px-4 pt-3">
                                <div className="overflow-hidden cursor-pointer" 
                                onClick={() => {setModalData(data); handleOnOpen();} }>
                                    <button className="font-bold truncate">{data.name}</button>
                                </div>
                            </div>

                            <div className="px-4">
                                <p className='pt-px'>{data.description}</p>
                            </div>

                            <div className="px-2.5 py-5px overflow-hidden">
                                <Topic close={false}>{data.topics}</Topic>
                            </div>
                        </li>
                    })
                }
            </ul>
            <Modal onClose={handleOnClose} visible={modalOn} modalData={modalData}/>
        </div>
    );
};

export default Projects;