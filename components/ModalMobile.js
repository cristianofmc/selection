'use client';

import { useEffect } from 'react';
import CoverRender from './CoverRender';
import Topic from './Topic';
import ArrowBackIcon from './Icons/ArrowBackIcon';
import GitHubForkIcon from './Icons/GitHubForkIcon';
import GitHubIcon from './Icons/GitHubIcon';
import FocusTrap from 'focus-trap-react';
import ContentRender from './ContentRender';

const ModalMobile = ({ visible, onClose, modalData }) => {
  const coverSize = { width: '672', height: '342' };
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [visible]);
  
useEffect(() => {
  const handlePopState = () => {
    if (visible) {
      onClose();
    }
  };

  if (visible) {
    // Empurra um novo estado para o histórico
    window.history.pushState({ modal: true }, '');
    window.addEventListener('popstate', handlePopState);
  }

return () => {
  window.removeEventListener('popstate', handlePopState);
};

}, [visible, onClose]);


  return (
    <FocusTrap
    focusTrapOptions={{
      preventScroll: true,
      clickOutsideDeactivates: true,
      initialFocus: false,
    }}
    >
      <div
        id="projectModal"
        onClick={onClose} 
        className="overflow-auto max-h-full bg-zinc-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center"
      >
        <div
  onClick={(e) => e.stopPropagation()}
  className="w-full h-full bg-white dark:bg-dark-black flex flex-col"
>

  {/* HEADER */}
  <div className="py-2 pr-1 flex items-center">
    <button
      type="button"
      onClick={onClose}
      className="rounded-full p-0.5 text-white bg-gray-900 bg-opacity-[.03] hover:bg-opacity-10"
    >
      <div className="pl-3 pr-3">
        <ArrowBackIcon />
      </div>
    </button>

    <div className="ml-auto flex">
      <a
        className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm dark:text-white-dark"
        target="_blank"
        href={modalData.html_url}
        rel="noopener noreferrer"
      >
        <GitHubIcon width={15} height={16} className="text-neutral-700 dark:text-white-dark fill-current" />
        <span className="ml-1">GitHub</span>
      </a>
      <a
        className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm dark:text-white-dark"
        target="_blank"
        href={`${modalData.html_url}/fork`}
        rel="noopener noreferrer"
      >
        <GitHubForkIcon width={15} height={16} className="text-neutral-700 dark:text-white-dark" />
        <span className="ml-1">Fork</span>
      </a>
    </div>
  </div>

  {/* SCROLLABLE CONTENT */}
  <div className="overflow-auto flex-grow">
    <CoverRender width={coverSize.width} height={coverSize.height} roundedTop={false}>
      {modalData}
    </CoverRender>

    <div className="px-4">
      <ContentRender repo={modalData}/>
    </div>
  </div>

  {/* FIXED BOTTOM FOOTER */}
  <div className="pl-4 py-4 shrink-0 border-zinc-200 dark:border-zinc-800">
    <Topic close={false}>{modalData.topics}</Topic>
  </div>

</div>
      </div>
    </FocusTrap>
  );
};

export default ModalMobile;
