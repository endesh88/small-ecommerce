import React from 'react'

const Modal = ({ Ismodalopen, setIsmodalopen, children, title = '' }) => {
  if (!Ismodalopen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsmodalopen(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-in fade-in-0 duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          )}
          <button
            onClick={() => setIsmodalopen(false)}
            className="ml-auto bg-transparent hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-lg text-sm p-1.5 inline-flex items-center transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal