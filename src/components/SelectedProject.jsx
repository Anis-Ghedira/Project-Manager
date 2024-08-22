export default function SelectedProject({ selectedProject }) {
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="w-[32rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2 text-stone-600 ">
            {selectedProject.title}
          </h1>
          <button className=" text-cyan-800 hover:text-cyan-900">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
    </div>
  );
}
