import { portfolioData } from "../../data/portfolioData";

const { projects } = portfolioData;

const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];

const ProjectList = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 md:px-10 border-b border-white/20"
    >
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16 opacity-60">
        <span className="text-xs font-mono">01</span>
        <h3 className="text-xs font-bold uppercase tracking-widest">
          Selected Works
        </h3>
      </div>

      {/* Project List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item group relative border-t border-white/20 py-12 md:py-20 transition-colors hover:bg-neutral-900"
          >
            <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center px-4">
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase font-bold tracking-tighter group-hover:pl-4 transition-all duration-300">
                {project.title}
              </h2>
              <div className="mt-4 md:mt-0 flex gap-4 text-sm font-mono uppercase opacity-60">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Hover Image Reveal */}
            <div
              className={`absolute top-1/2 left-1/2 w-64 h-40 bg-white/10 opacity-0 project-image-reveal pointer-events-none ${
                rotations[index % rotations.length]
              } overflow-hidden`}
              style={{ transform: "scale(0.9) translate(-50%, -50%)" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-500 text-xs uppercase">Preview</div>`;
                }}
              />
            </div>
          </a>
        ))}
        <div className="border-t border-white/20" />
      </div>
    </section>
  );
};

export default ProjectList;
