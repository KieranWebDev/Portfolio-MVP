import Image from 'next/image';
import PlaceholderImg from '../Images/placeholder- projects.JPG';

export default function Card({
  image,
  projectTitle,
  description,
  linkToSite,
  linkToRepo,
}) {
  return (
    <div className="project-card-standard">
      <div className="card-top-standard">
        <Image
          className="project-image"
          src={image}
          alt="project"
          width={800}
          height={400}
        ></Image>
      </div>
      <div className="card-bottom-standard">
        <h3>{projectTitle}</h3>
        <p>{description}</p>
        <div className="button-container">
          <button className="btn-main">
            <a href={linkToSite} target="_blank" rel="noreferrer">
              Visit Site
            </a>
          </button>
          <button className="btn-secondary">
            <a href={linkToRepo} target="_blank" rel="noreferrer">
              Visit Repo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
