import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSaveProject() {
    const entredTitle = title.current.value;
    const entredDescription = description.current.value;
    const entredDueDate = dueDate.current.value;
    if (
      entredTitle.trim() === "" ||
      entredDescription.trim() === "" ||
      entredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: entredTitle,
      descritption: entredDescription,
      dueDate: entredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} button="Close">
        <h2 className="text-2xl font-bold text-stone-500 my-4 text-center">
          Invalid Inputs
        </h2>
        <p className=" text-stone-600 mb-4">
          Please make sure you provide a valide value for every input field.
        </p>
      </Modal>
      <div className="w-[32rem] mt-16">
        <menu className="flex items-center justify-end my-4 gap-4">
          <li>
            <button
              onClick={onCancel}
              className="text-cyan-800 hover:text-cyan-900"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="bg-cyan-800 text-stone-50 hover:bg-cyan-900 mr-6 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" title="Title" />
          <Input ref={description} textarea title="Description" />
          <Input ref={dueDate} type="date" title="Due Date" />
        </div>
      </div>
    </>
  );
}
