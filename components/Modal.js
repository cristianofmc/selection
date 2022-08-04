const Modal = ({visible, onClose}) => {

    if(!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'projectModal') onClose();
    };

    return(
        <div id='projectModal' onClick={handleOnClose} className="bg-zinc-200 backdrop-blur-sm bg-opacity-80 fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg ">
                <p>Modal test</p>
                <button className='border border-zinc-500 inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-2 mr-1.5 mt-1.5' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;