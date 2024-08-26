import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: [],
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

  // Deleting a project
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      };
    });
  }

  // Adding tasks to a project
  function handleAddTask(task) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return { ...prevState, tasks: [newTask, ...prevState.tasks] };
    });
  }

  // Deleting tasks from a project
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
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
    content = (
      <SelectedProject
        onSelect={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        addNewProject={handleAddProject}
        projects={projectState.project}
        onSelect={handleSelectProject}
        active={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
