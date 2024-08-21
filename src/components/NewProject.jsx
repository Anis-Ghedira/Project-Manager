import Input from "./Input.jsx";
export default function NewProject() {
  return (
    <div className="w-[32rem] mt-16">
      <menu className="flex items-center justify-end my-4 gap-4">
        <li>
          <button className="text-cyan-800 hover:text-cyan-900">Cancel</button>
        </li>
        <li>
          <button className="bg-cyan-800 text-stone-50 hover:bg-cyan-900 mr-6 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" title="Title" />
        <Input textarea title="Description" />
        <Input type="date" title="Due Date" />
      </div>
    </div>
  );
}
