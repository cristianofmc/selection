import CoverRender from "./CoverRender";
import Topic from "./Topic";
import CloseIcon from "./Icons/CloseIcon";
import GitHubForkIcon from "./Icons/GitHubForkIcon";
import GitHubIcon from "./Icons/GitHubIcon";


const Modal = ({visible, onClose, modalData}) => {

    let coverSize = {width: "672", height:"342"}
    if(!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'projectModal') onClose();
    };

    return(
        <div id='projectModal' onClick={handleOnClose} className="bg-zinc-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white mx-2 rounded-lg border border-zinc-500 max-w-xl">
                <div className="group relative">
                    <div className="overflow-hidden">
                        <CoverRender width={coverSize.width} height={coverSize.height}>{modalData}</CoverRender>
                    </div>
                    <div className="absolute top-3 right-3 z-10 -ml-8 flex pt-1 pr-1 ">
                        <button type="button" className="rounded-full text-white bg-gray-900 bg-opacity-[.03] hover:bg-gray-900 hover:bg-opacity-10 focus:outline-none p-1" onClick={onClose}>
                            <span className="sr-only">Close modal</span>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="px-4">
                        <h1 className="text-xl font-normal tracking-normal leading-7 pt-4 pb-3">{modalData.name}</h1>
                        <p className="text-base font-normal tracking-normal leading-6 pt-1 pb-3" >{modalData.description}</p>
                    </div>
                </div>
                <Topic close={false}>{modalData.topics}</Topic>
                <div className="my-1 text-gray-900">
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" target="_blank" href={modalData.html_url}>
                        <GitHubIcon  width={15} height={15} className="text-neutral-700 fill-current"/> <span className="ml-1">GitHub</span>
                    </a>
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" target="_blank" href={`${modalData.html_url}/fork`}>
                        <GitHubForkIcon  width={15} height={15} className="text-neutral-700"/> <span className="ml-1">Fork</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
