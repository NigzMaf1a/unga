// Modal.tsx

import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;                
  onClose: () => void;            
  children: React.ReactNode;      
  title?: string;                 
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 
        flex items-center justify-center 
        bg-black/50 backdrop-blur-sm
      "
      onClick={onClose} // click outside closes modal
    >
      <div
        className="
          bg-white dark:bg-gray-900 
          text-black dark:text-white
          rounded-xl shadow-xl 
          w-full max-w-lg 
          p-6 relative
          animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="
            absolute top-3 right-3 
            text-gray-500 hover:text-red-500 
            text-xl font-bold
          "
          onClick={onClose}
        >
          ×
        </button>

        {/* Optional Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4">
            {title}
          </h2>
        )}

        {/* Dynamic Content */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;