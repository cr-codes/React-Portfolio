import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <div className="project_head">
      <h5>What I Have Build</h5>
          <h2>My Projects</h2>
      </div>
      <div className="project project-1">
        <div className="project-img1"></div>
        <div className="project-info">
          <h1 className="name">Portfolio</h1>
          <h3 className="position">React App</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>Visit</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div className="project-img2"></div>
        <div className="project-info">
          <h1 className="name">CR Blogs</h1>
          <h3 className="position">React App</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>Visit</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div className="project-img3"></div>
        <div className="project-info">
          <h1 className="name">Netflix Clone</h1>
          <h3 className="position">React App</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>Visit</span>
          </a>
        </div>
      </div>

      <div className="project project-4">
        <div className="project-img4"></div>
        <div className="project-info">
          <h1 className="name">TODO List</h1>
          <h3 className="position">React App</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
