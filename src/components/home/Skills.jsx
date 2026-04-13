import { portfolioData } from "../../data/portfolioData";

const { skills } = portfolioData;

const Skills = () => {
  return (
    <section className="h-[60vh] md:h-[80vh] flex flex-col md:flex-row border-b border-white/20 bg-black">
      {skills.map((skill, index) => {
        const isLast = index === skills.length - 1;

        return (
          <div
            key={skill.category}
            className={`skill-strip group flex-1 ${
              isLast ? "" : "border-b md:border-b-0 md:border-r"
            } border-white/20 relative overflow-hidden flex flex-col justify-between p-6 hover:cursor-crosshair`}
          >
            {/* Top: Number + Icon */}
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </span>
            </div>

            {/* Center: Tech Pills (hidden, revealed on hover) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-current rounded-full text-xs font-bold uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: Category Name (rotated on desktop) */}
            <h3 className="font-display text-4xl uppercase font-bold tracking-tighter transform md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-6 md:left-10 whitespace-nowrap group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-2 transition-transform duration-300">
              {skill.category}
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
