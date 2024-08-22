import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  // Adding New Project
  function handleAddProject() {
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
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  // Selecting a Project
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected addNewProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSave={handleSaveProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else {
    content = <SelectedProject selectedProject={selectedProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        addNewProject={handleAddProject}
        projects={projectState.project}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
