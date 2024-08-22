import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  // Adding New Project
  function hamdleAddProject() {
    setProjectState((prevState) => {
      let newProject = { ...prevState };
      newProject.selectedProjectId = null;
      return newProject;
    });
  }

  // Cancel Adding New Project
  function hamdleCancelAddProject() {
    setProjectState((prevState) => {
      let cancelProject = { ...prevState };
      cancelProject.selectedProjectId = undefined;
      return cancelProject;
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar addNewProject={hamdleAddProject} />

      {projectState.selectedProjectId === null ? (
        <NewProject onCancel={hamdleCancelAddProject} />
      ) : (
        <NoProjectSelected addNewProject={hamdleAddProject} />
      )}
    </main>
  );
}

export default App;
