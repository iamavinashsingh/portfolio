import { portfolioData } from "../../data/portfolioData";

const { about, personalInfo } = portfolioData;

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 md:px-10 border-b border-white/20 bg-neutral-900/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
        {/* Portrait */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-neutral-800 border-2 border-white/10 overflow-hidden relative grayscale contrast-125">
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10" />
            <img
              src={about.portrait}
              alt={`${personalInfo.name} portrait`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.insertAdjacentHTML(
                  "beforeend",
                  '<div class="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-600"><span class="material-symbols-outlined text-9xl">person</span></div>'
                );
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-8">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
            {about.displayHeading.line1}{" "}
            <span className="text-white/40">{about.displayHeading.highlight1}</span>{" "}
            {about.displayHeading.connector} <br />
            {about.displayHeading.line2}{" "}
            <span className="text-white/40">{about.displayHeading.highlight2}</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed text-white/80">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={about.resumeLink}
              className="inline-flex items-center gap-2 border border-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Download Resume
              <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
