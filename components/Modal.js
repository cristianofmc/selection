import CoverRender from "./CoverRender";
import Tag from "./Tag";
import Close from "./Icons/Close";
import GitFork from "./Icons/GitFork";
import GitStar from "./Icons/GitStar";
import GitWatch from "./Icons/GitWatch";


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
                    <div className="overflow-hidden cursor-pointer">
                        <CoverRender width={coverSize.width} height={coverSize.height}>{modalData}</CoverRender>
                    </div>
                    <div class="absolute top-3 right-3 z-10 -ml-8 flex pt-1 pr-1 ">
                        <button type="button" class="rounded-full text-white bg-gray-900 bg-opacity-[.03] hover:bg-gray-900 hover:bg-opacity-10 focus:outline-none p-1" onClick={onClose}>
                            <span class="sr-only">Close modal</span>
                            <Close/>
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
                        <GitWatch  width={15} height={15} class="text-neutral-700 fill-current"/> <span className="ml-1">Watch</span>
                    </a>
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" href="/">
                        <GitFork  width={15} height={15} class="text-neutral-700"/> <span className="ml-1">Fork</span>
                    </a>
                    <a className="inline-flex items-center rounded-full p-2 mx-2 hover:bg-gray-600 hover:bg-opacity-[0.15] text-sm" href="/">
                        <GitStar  width={15} height={15} class="text-neutral-700 fill-current"/> <span className="ml-1">Star</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;