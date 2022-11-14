import ProjectItem from "./ProjectItem";
import placeholder from "../public/assets/projects/placeholder.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2dacac]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="The Vinyl Vault"
            backgroundImg={placeholder}
            projectUrl="/VinylVault"
          />
          <ProjectItem
            title="Project Name"
            backgroundImg={placeholder}
            projectUrl="/project"
          />
          <ProjectItem
            title="Project Name"
            backgroundImg={placeholder}
            projectUrl="/project"
          />
          <ProjectItem
            title="Project Name"
            backgroundImg={placeholder}
            projectUrl="/project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
