import NoProjectImage from "../assets/no-projects.png";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImage}
        className="w-60 h-60 mx-auto object-contain"
        alt="an empty project"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4  ">
        No Project Selected
      </h2>
      <p className=" text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p>
        <button className="bg-cyan-800 text-stone-50 hover:bg-cyan-900 mr-6 px-6 py-2 rounded-md">
          Create a new project
        </button>
      </p>
    </div>
  );
}
