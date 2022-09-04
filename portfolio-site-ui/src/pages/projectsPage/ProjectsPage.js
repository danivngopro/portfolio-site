import "./ProjectsPage.css";
import { projects } from "../../data/projects";

function ProjectsPage() {
  return (
    <>
      {projects ? (
        <>
          {projects.map(function (project, index) {
            return (
              <div key={index} className="projects__page-project-container">
                <p className="projects__page-project-title">{project.title}</p>
                <div className="projects__page-project-link">
                  <p className="projects__page-project-github">
                    link to source code on github:{" "}
                  </p>
                  <a className="link" href={project.github}>{project.github}</a>
                </div>
                {project.live && (
                  <div className="projects__page-project-link">
                    <p className="projects__page-project-live">
                      link to live project:{" "}
                    </p>
                    <a className="link" href={project.live}>{project.live}</a>
                  </div>
                )}
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
}

export default ProjectsPage;
