import { useState } from 'react';
import CoverRender from './CoverRender';
import ModalMobile from './ModalMobile';
import Modal from './Modal';
import Topic from './Topic';
import NoResults from './NoResults';
import SeeDetailsIcon from './Icons/SeeDetailsIcon';
import useBreakpoint from './useBreakpoint';

const Projects = ({ children }) => {
  const [modalOn, setModalOn] = useState(false);
  const [modalData, setModalData] = useState(null);
  const isMobile = useBreakpoint();
  
  const handleOnOpen = (data) => {
    document.body.classList.add('overflow-y-hidden');
    setModalData(data);
    setModalOn(true);
  };

  const handleOnClose = () => {
    document.body.classList.remove('overflow-y-hidden');
    setModalOn(false);
  };

  if (!children || children.length === 0) return <NoResults />;

  const renderProject = (data) => (
    <article id={data.id} key={data.id} className="rounded-lg border border-border-gray dark:border-project-dark-border">
      <header className="group relative">
        <figure
          aria-hidden="true"
          className="overflow-hidden cursor-pointer"
          onClick={() => {
            handleOnOpen(data);
          }}
        >
          <CoverRender width="600" height="400">{data}</CoverRender>
        </figure>

        <div className="absolute top-2 right-2 z-10 -ml-8 flex">
          <button
            type="button"
            className="rounded-full p-px text-white bg-gray-900 bg-opacity-[.05] hover:bg-gray-900 hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            onClick={() => {
              handleOnOpen(data);
            }}
          >
            <span className="sr-only">See details</span>
            <SeeDetailsIcon width={30} height={30} className="text-white fill-current" />
          </button>
        </div>

        <div className="px-4 pt-3">
          <div className="overflow-hidden cursor-pointer">
            <span className="font-bold truncate text-lg">{data.name}</span>
          </div>
        </div>
      </header>

      <div className="px-4">
        <p className="pt-px">{data.description}</p>
      </div>

      <div className="px-2.5 py-5px overflow-hidden">
        <Topic close={false}>{data.topics}</Topic>
      </div>
    </article>
  );

  return (
    <div id="projects" className="py-3 mx-2 md:mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
      {children.map(renderProject)}
      {modalOn && modalData && (
        isMobile
          ? <ModalMobile onClose={handleOnClose} visible={modalOn} modalData={modalData} />
          : <Modal onClose={handleOnClose} visible={modalOn} modalData={modalData} />
      )}
    </div>
  );
};

export default Projects;
