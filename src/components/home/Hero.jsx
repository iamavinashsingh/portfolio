import { portfolioData } from "../../data/portfolioData";

const { personalInfo } = portfolioData;

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-10 pt-20 pb-10 border-b border-white/20"
    >
      {/* Main Typography */}
      <div className="relative z-10 select-none mt-auto mb-auto">
        <div className="reveal-up">
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] xl:text-[13rem] uppercase brutalist-text tracking-tighter text-white">
            Full Stack
          </h2>
        </div>
        <div className="reveal-up delay-100 flex flex-col md:items-end">
          <div className="relative">
            <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] xl:text-[13rem] uppercase brutalist-text tracking-tighter text-white">
              Developer
            </h2>
            <div className="absolute -bottom-8 right-0 md:bottom-6 md:-right-4 reveal-up delay-300">
              <span className="block text-right text-xs md:text-sm font-bold tracking-widest uppercase text-white/80">
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute top-1/2 left-[60%] w-2 h-2 bg-white rounded-full hidden md:block reveal-up delay-500" />

      {/* Bottom Bar */}
      <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full relative z-20 pt-20">
        {/* Social Links */}
        <div className="flex gap-8 text-sm font-bold uppercase tracking-wide reveal-up delay-300">
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-hover flex items-center gap-1 hover:opacity-60 transition-opacity"
          >
            LinkedIn
            <span className="material-symbols-outlined text-base arrow-icon -rotate-45">
              arrow_forward
            </span>
          </a>
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-hover flex items-center gap-1 hover:opacity-60 transition-opacity"
          >
            GitHub
            <span className="material-symbols-outlined text-base arrow-icon -rotate-45">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Availability */}
        <div className="flex flex-col items-start md:items-end gap-1 text-right reveal-up delay-300">
          <p className="uppercase font-bold tracking-wide text-sm md:text-base leading-tight">
            {personalInfo.availability}
          </p>
          <p className="text-white/60 text-sm">{personalInfo.workPreference}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
