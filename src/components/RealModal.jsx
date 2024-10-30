const RealModal = ({ onClose, what }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full h-[90vh]">
          <h2 className="text-xl font-semibold">{what == 1? "Wish List":"Cash Gift"}</h2>
          <p className="mt-4">This is the content of the modal. You can add more details here.</p>
          <button 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default RealModal;