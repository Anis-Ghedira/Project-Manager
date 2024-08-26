import NewTAsk from "./NewTAsk";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTAsk onAddTask={onAddTask} />
      {tasks.length == 0 && (
        <p className="my-4 text-stone-800">
          This Project does not have any tasks yet!
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li
              className="flex justify-between my-2 rounded-md p-2 bg-stone-200"
              key={task.id}
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className=" px-4  text-cyan-900 bg-stone-200 hover:text-red-700"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
