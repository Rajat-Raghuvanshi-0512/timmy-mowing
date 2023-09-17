import React from 'react';

const Modal = ({
  children,
  isOpen,
  closeModal,
  submitText,
  onClick,
  title,
  closeText,
}) => {
  return (
    <>
      <div
        className={`${
          !isOpen && 'scale-0'
        } fixed w-screen top-0 left-0 h-screen z-50 select-none bg-black bg-opacity-40`}
      >
        <div className="relative max-w-md h-auto shadow border-2 lg:border-4 border-white/50 bg-[#243d13] rounded-3xl  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ease-out scale-100">
          <div className="px-10 py-4 rounded-t">
            <h3 className="text-4xl lg:text-5xl uppercase font-bold !leading-snug text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <div>{children}</div>
          {closeModal && (
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
              {submitText && onClick && (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  w-full"
                  onClick={onClick}
                >
                  {submitText}
                </button>
              )}
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-red-500 hover:text-white focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-500  w-full"
                onClick={closeModal}
              >
                {closeText ? closeText : 'Cancel'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
