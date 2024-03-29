import Card from './Card';
import projects from '../data/data';
//images

export default function Projects() {
  return (
    <section className="projects-background-settings">
      <div className="projects-width">
        <h2 className="projects-heading">My Projects</h2>
        <div className="project-grid-container">
          {projects.map((project) => (
            <Card
              key={project.projectTitle}
              image={project.image}
              title={project.projectTitle}
              description={project.description}
              linkToSite={project.linkToSite}
              linkToRepo={project.linkToRepo}
            />
          ))}

          {/* <div className="project-card-standard">
            <Image src={PlaceholderImg} alt="project"></Image>
            <h3>Project Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              reiciendis cumque veniam ipsum sed labore. A nulla veritatis
              perspiciatis dolorem, accusantium, doloremque minus numquam
              suscipit deleniti ducimus ipsum totam officia.
            </p>
            <button className="btn-main">Visit Site</button>
            <button className="btn-main">Github repo</button>
          </div> */}
        </div>
      </div>
      <div id="contact"></div>
    </section>
  );
}
