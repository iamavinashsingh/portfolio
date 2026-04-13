import Magnetic from "../ui/Magnetic";

const Button = ({
  label = "Button",
  href,
  variant = "filled",
  onClick,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ease-out";

  const variants = {
    filled:
      "bg-white text-black hover:bg-[#cdff00] hover:text-black",
    outline:
      "border border-white/30 text-white hover:bg-white hover:text-black",
  };

  const Tag = href ? "a" : "button";

  return (
    <Magnetic strength={0.25}>
      <Tag
        href={href}
        onClick={onClick}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        data-cursor-pointer
      >
        {label}
      </Tag>
    </Magnetic>
  );
};

export default Button;
