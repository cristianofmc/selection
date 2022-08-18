import CoverRender from "./CoverRender";
import Tag from "./Tag";
import Image from 'next/image';
import ForkIcon from "../public/icons/git_fork_icon.svg";
import StarProject from "../public/icons/star_project.svg";
import WatchProject from "../public/icons/watch_project.svg";
import YourSvg from  "../public/icons/watch_project.svg";
import SvgComponent from "./SvgCOmponent";

const Modal = ({visible, onClose, modalData}) => {

    let converSize = {width: "672", height:"342"}
    if(!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'projectModal') onClose();
    };

    return(
        <div id='projectModal' onClick={handleOnClose} className="bg-zinc-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white mx-2 rounded-lg border border-zinc-500 max-w-xl">
                <div className="group relative">
                    <div className="overflow-hidden cursor-pointer">
                        <CoverRender width={converSize.width} height={converSize.height} >{modalData}</CoverRender>
                    </div>
                    <div class="absolute top-3 right-3 z-10 -ml-8 flex pt-1 pr-1 ">
                        <button type="button" class="rounded-full text-white bg-gray-900 bg-opacity-[.03] hover:bg-gray-900 hover:bg-opacity-10 focus:outline-none p-1" onClick={onClose}>
                            <span class="sr-only">Close modal</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4">
                        <h1 className="text-xl font-normal tracking-normal leading-7 pt-4 pb-3">{modalData.name}</h1>
                        <p className="text-base font-normal tracking-normal leading-6 pt-1 pb-3" >{modalData.description}</p>
                    </div>
                </div>
                <Tag>{modalData.topics}</Tag>
                <div className="my-1 text-gray-900">
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" href="/">
                        {/* <Image src={WatchProject} style="fill:#ff0000" stroke="green" alt="star" width={18} height={18} /> */}
                        <SvgComponent width={15} height={15} fill="#ff0000" stroke="blue" />
                        {/* <WatchProject fill="#ff0000"></WatchProject> */}
                        {/* Watch */}
                    </a>
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" href="/">
                        {/* <Image src={forkIcon} alt="fork" width={18} height={18} /> */}
                        Fork
                    </a>
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" href="/">
                        {/* <Image src={starProject} alt="star" width={18} height={18} /> */}
                        Favorite
                    </a>
                    {/* <WatchProject fill="blue"/> */}
                </div>
            </div>
        </div>
    );
};

export default Modal;