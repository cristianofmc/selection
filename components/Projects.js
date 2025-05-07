
import { useState } from 'react';
import CoverRender  from './CoverRender';
import Modal from './Modal';
import Topic from './Topic';
import NoResults from './NoResults';
import SeeDetailsIcon from './Icons/SeeDetailsIcon';


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
        <div id="projects" className="py-3 mx-2 md:mx-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
            {
                props.children.map((data, index) => {
                    return <article id={data.id} key={data.id} className="rounded-lg border border-border-gray dark:border-project-dark-border">
                        <header className='group relative'>
                            <figure aria-hidden="true" className="overflow-hidden cursor-pointer" 
                            onClick={() => {setModalData(data); handleOnOpen();} }>
                                <CoverRender width="600" height="400">{data}</CoverRender>
                            </figure>

                            <div className="absolute top-2 right-2 z-10 -ml-8 flex">
                            <button
                                type="button"
                                className="rounded-full  p-px text-white bg-gray-900 bg-opacity-[.05]
                                    hover:bg-gray-900 hover:bg-opacity-10 
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                onClick={() => { setModalData(data); handleOnOpen(); }}
                                >
                                <span className="sr-only">See details</span>
                                <SeeDetailsIcon aria-hidden="true" width={30} height={30} className="text-white fill-current"/>
                            </button>
                            </div>

                            <div className="px-4 pt-3">
                                <div className="overflow-hidden cursor-pointer">
                                    <span className="font-bold truncate text-lg">{data.name}</span>
                                </div>

                            </div>
                        </header>
                        <div className="px-4">
                            <p className='pt-px'>{data.description}</p>
                        </div>

                        <div className="px-2.5 py-5px overflow-hidden">
                            <Topic close={false}>{data.topics}</Topic>
                        </div>
                    </article>
                })
            }
            <Modal onClose={handleOnClose} visible={modalOn} modalData={modalData}/>
        </div>
    );
};

export default Projects;