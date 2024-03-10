import { useTheme } from 'hooks/useTheme';

interface InputProps {
  className?: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ className, label, onChange }: InputProps) => {
  const { theme } = useTheme();
  return (
    <>
      <p className={`${className} label ${theme}`}>{label}</p>
      <input type="text" className="control" onChange={onChange} />
    </>
  );
};
