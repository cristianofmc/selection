import CoverRender from "./CoverRender";
import Tag from "./Tag";

const Modal = ({visible, onClose, modalData}) => {

    if(!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'projectModal') onClose();
    };

    return(
        <div id='projectModal' onClick={handleOnClose} className="bg-zinc-900 bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white mx-2 rounded-lg border border-zinc-500">
            <div className="overflow-hidden cursor-pointer">
                <CoverRender>{modalData}</CoverRender>
            </div>

            <div className="px-4 pt-3">
                <h1 className="font-bold">{modalData.name}</h1>
                <p>{modalData.description}</p>
            </div>
            
            <Tag>{modalData.topics}</Tag>
                <button className='border border-zinc-500 inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-2 mr-1.5 mt-1.5' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;