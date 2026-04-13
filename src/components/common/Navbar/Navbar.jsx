import { portfolioData } from "../../../data/portfolioData";

const { personalInfo } = portfolioData;

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference text-white">
      <div>
        <h1 className="font-bold text-lg tracking-tight">
          <a href="#hero">{personalInfo.name}</a>
        </h1>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide opacity-80">
        <a
          href="#projects"
          className="hover:opacity-100 transition-opacity"
        >
          Work
        </a>
        <a
          href="#about"
          className="hover:opacity-100 transition-opacity"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:opacity-100 transition-opacity"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
