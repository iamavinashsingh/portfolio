import { portfolioData } from "../../data/portfolioData";

const { experience } = portfolioData;

const Timeline = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-6 md:px-10 border-b border-white/20 relative"
    >
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-20 opacity-60">
        <span className="text-xs font-mono">02</span>
        <h3 className="text-xs font-bold uppercase tracking-widest">
          Experience
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />

        {experience.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 last:mb-0"
            >
              {/* Role + Company */}
              <div
                className={`text-left ${
                  isEven ? "md:text-right order-1" : "md:text-right order-1 md:order-2"
                }`}
              >
                <h4 className="font-display text-3xl font-bold uppercase tracking-tight">
                  {exp.role}
                </h4>
                <p className="text-sm text-white/60 mt-2 uppercase tracking-wide">
                  {exp.company}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 -translate-x-1/2 z-10">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    isEven
                      ? "bg-black border-white"
                      : "bg-white border-black"
                  }`}
                />
              </div>

              {/* Year + Description */}
              <div
                className={`text-left ${
                  isEven ? "order-2" : "order-2 md:order-1 md:text-right"
                }`}
              >
                <span className="font-mono text-4xl md:text-5xl font-bold text-white/10">
                  {exp.year}
                </span>
                <p
                  className={`mt-2 text-sm text-white/80 leading-relaxed max-w-xs ${
                    isEven ? "" : "ml-auto"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
