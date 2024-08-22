import { useRef } from "react";
import Input from "./Input.jsx";
export default function NewProject({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveProject() {
    const entredTitle = title;
    const entredDescription = description;
    const entredDueDate = dueDate;
    onSave({
      title: entredTitle.current.value,
      descritption: entredDescription.current.value,
      dueDate: entredDueDate.current.value,
    });
  }

  return (
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
  );
}
