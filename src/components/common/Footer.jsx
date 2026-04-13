import { portfolioData } from "../../data/portfolioData";
import useTime from "../../hooks/useTime";

const { personalInfo } = portfolioData;

const Footer = () => {
  const time = useTime();

  return (
    <footer
      id="contact"
      className="pt-20 md:pt-40 px-6 md:px-10 pb-10 flex flex-col justify-between min-h-screen relative overflow-hidden"
    >
      {/* CTA Section */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10 opacity-60">
          <span className="text-xs font-mono">03</span>
          <h3 className="text-xs font-bold uppercase tracking-widest">
            Get in touch
          </h3>
        </div>
        <h2 className="font-display text-huge font-bold uppercase leading-[0.8] tracking-tighter mix-blend-difference pointer-events-none">
          Let&apos;s Work
          <br />
          Together
        </h2>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 border-t border-white/20 pt-10">
        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <a
                href={personalInfo.contact.email}
                className="hover:text-white/60 transition-colors"
              >
                avinash@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">
            Socials
          </h4>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-hover flex items-center gap-2 hover:text-white/60 transition-colors"
              >
                LinkedIn{" "}
                <span className="material-symbols-outlined text-sm arrow-icon -rotate-45">
                  arrow_forward
                </span>
              </a>
            </li>
            <li>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-hover flex items-center gap-2 hover:text-white/60 transition-colors"
              >
                GitHub{" "}
                <span className="material-symbols-outlined text-sm arrow-icon -rotate-45">
                  arrow_forward
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="arrow-hover flex items-center gap-2 hover:text-white/60 transition-colors"
              >
                Twitter{" "}
                <span className="material-symbols-outlined text-sm arrow-icon -rotate-45">
                  arrow_forward
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Local Time */}
        <div className="flex flex-col justify-between">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">
            Local Time
          </h4>
          <div className="text-4xl font-mono">{time}</div>
          <div className="mt-4 text-xs text-white/40 uppercase">
            © {new Date().getFullYear()} {personalInfo.name}.
            <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
