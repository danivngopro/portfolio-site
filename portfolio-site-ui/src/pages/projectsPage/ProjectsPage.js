import "./ProjectsPage.css";

function ProjectsPage() {
  const projects = [
    { 1: "asdf", 2: "asdfasdf", 3: "asdfasdf" },
    { 1: "asvbbvndf", 2: "asdfasdf", 3: "asdfasdf" },
    { 1: "asfggdf", 2: "asdfasdf", 3: "asdfasdf" },
    { 1: "asghdf", 2: "asdfasdf", 3: "asdfasdf" },
    { 1: "asdghf", 2: "asdfasdf", 3: "" },
    { 1: "asdfgfghfghfghfghf", 2: "asdfasdf", 3: "asdfasdf" },
  ];

  return (
    <>
      {projects ? (
        <>
          {projects.map(function (project, index) {
            return (
              <div key={index} className="projects__page-project-container">
                <p className="projects__page-project-title">{project[1]}</p>
                <div className="projects__page-project-link">
                  <p className="projects__page-project-github">
                    link to source code on github:{" "}
                  </p>
                  <a className="link" href={project[2]}>{project[2]}</a>
                </div>
                {project[3] && (
                  <div className="projects__page-project-link">
                    <p className="projects__page-project-live">
                      link to live project:{" "}
                    </p>
                    <a className="link" href={project[3]}>{project[3]}</a>
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
