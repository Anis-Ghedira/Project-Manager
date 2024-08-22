import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function ({ children, button }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-center">
        <button className="bg-cyan-800 text-stone-50 hover:bg-cyan-900 px-6 py-2 rounded-md">
          {button}
        </button>
      </form>
    </dialog>
  );
});
export default Modal;
