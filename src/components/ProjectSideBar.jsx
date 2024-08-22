export default function ProjectSideBar({ addNewProject, projects, onSelect }) {
  return (
    <aside className="w-1/3 md:w-72 p-8 bg-cyan-800 text-stone-50 rounded-r-xl">
      <h2 className="text-center mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="text-center">
        <button
          onClick={addNewProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-800"
        >
          +Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelect(project.id)}
              className="w-full text-left px-2 py-1 my-1 rounded-md h-10 hover:bg-stone-100 hover:text-stone-800 transition-all"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
