import "../assets/css/Button.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
