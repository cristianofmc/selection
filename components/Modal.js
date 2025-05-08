'use client';

import { useEffect } from 'react';
import CoverRender from './CoverRender';
import Topic from './Topic';
import CloseIcon from './Icons/CloseIcon';
import GitHubForkIcon from './Icons/GitHubForkIcon';
import GitHubIcon from './Icons/GitHubIcon';
import FocusTrap from 'focus-trap-react';

const Modal = ({ visible, onClose, modalData }) => {
  const coverSize = { width: '672', height: '342' };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'projectModal') onClose();
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: onClose, initialFocus: false }}>
      <div
        id="projectModal"
        onClick={handleOnClose}
        className="overflow-auto max-h-full bg-zinc-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center"
      >
        <div className="overflow-auto max-h-full bg-white mx-2 rounded-lg border border-zinc-500 max-w-md md:max-w-xl dark:border-border-dark-grey dark:bg-dark-black">
          <div className="group relative">
            <div className="overflow-hidden">
              <CoverRender width={coverSize.width} height={coverSize.height}>
                {modalData}
              </CoverRender>
            </div>
            <div className="absolute top-3 right-3 z-10 flex pt-1 pr-1">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-0.5 text-white bg-gray-900 bg-opacity-[.03]
                  hover:bg-gray-900 hover:bg-opacity-10 
                  focus:outline-none 
                  focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="sr-only">Close modal</span>
                <CloseIcon />
              </button>
            </div>
            <div className="px-4">
              <h1 className="text-xl font-normal tracking-normal leading-7 pt-4 pb-3">
                {modalData.name}
              </h1>
              <p className="text-base font-normal tracking-normal leading-6 pt-1 pb-3">
                {modalData.description}
              </p>
            </div>
          </div>

          <div className="px-2.5 py-1 overflow-hidden" aria-label="technologies used in this project">
            <Topic close={false}>{modalData.topics}</Topic>
          </div>

          <div className="my-1 text-gray-900">
            <a
              className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm dark:text-white-dark dark:hover:bg-button-hero-black"
              target="_blank"
              href={modalData.html_url}
              rel="noopener noreferrer"
            >
              <GitHubIcon width={15} height={15} className="text-neutral-700 dark:text-white-dark fill-current" />
              <span className="ml-1">GitHub</span>
            </a>
            <a
              className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm dark:text-white-dark dark:hover:bg-button-hero-black"
              target="_blank"
              href={`${modalData.html_url}/fork`}
              rel="noopener noreferrer"
            >
              <GitHubForkIcon width={15} height={15} className="text-neutral-700 dark:text-white-dark" />
              <span className="ml-1">Fork</span>
            </a>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default Modal;
