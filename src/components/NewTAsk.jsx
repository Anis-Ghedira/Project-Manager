import { useState } from "react";

export default function NewTAsk({ onAddTask }) {
  const [entredTask, setEntredTask] = useState("");

  function handleChange(event) {
    setEntredTask(event.target.value);
  }
  function handleClick() {
    if (entredTask.trim() === "") {
      return;
    }
    onAddTask(entredTask);
    setEntredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className=" w-80 px-2 text-xl rounded-sm bg-stone-200"
        onChange={handleChange}
        value={entredTask}
      />
      <button
        onClick={handleClick}
        className="bg-cyan-800 text-stone-50 hover:bg-cyan-900 mr-6 px-4 py-1 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
}
