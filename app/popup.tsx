import React from "react";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Pop-Up Title</h2>
        <p className="mb-4">This is your pop-up content.</p>
        <button
          className="px-4 py-2 bg-[#156095] text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
