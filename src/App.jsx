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
      return { ...prevState, selectedProjectId: null };
    });
  }

  // Saving New Project
  function handleSaveProject(CurrentProjectDetails) {
    setProjectState((prevState) => {
      let saveProject = { ...prevState, selectedProjectId: undefined };
      saveProject.project = [
        {
          title: CurrentProjectDetails.title,
          description: CurrentProjectDetails.descritption,
          dueDate: CurrentProjectDetails.dueDate,
          id: Math.random(),
        },
        ...prevState.project,
      ];
      return saveProject;
    });
  }

  // Cancel Adding New Project
  function hamdleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        addNewProject={hamdleAddProject}
        projects={projectState.project}
      />

      {projectState.selectedProjectId === null ? (
        <NewProject
          onSave={handleSaveProject}
          onCancel={hamdleCancelAddProject}
        />
      ) : (
        <NoProjectSelected addNewProject={hamdleAddProject} />
      )}
    </main>
  );
}

export default App;
