import "./ProjectsPage.css";
import { projects } from "../../data/projects";

function ProjectsPage() {
  return (
    <div className="projects__page__container">
      {projects ? (
        <>
          {projects.map(function (project, index) {
            return (
              <div key={index} className="projects__page-project-container">
                <p className="projects__page-project-title">{project.title}</p>
                <div className="projects__page-project-link">
                  <p className="projects__page-project-github">
                    Github:{" "}
                  </p>
                  <a className="link" href={project.github}>{project.github}</a>
                </div>
                {project.live && (
                  <div className="projects__page-project-link">
                    <p className="projects__page-project-live">
                      Live project:{" "}
                    </p>
                    <a className="link" href={project.live}>{project.live}</a>
                  </div>
                )}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default ProjectsPage;
