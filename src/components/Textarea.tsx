import { useTheme } from 'hooks/useTheme';

interface TextareaProps {
  className?: string;
  label: string;
  rows?: number;
  cols?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  className,
  label,
  rows = 5,
  cols = 33,
  onChange,
}: TextareaProps) => {
  const { theme } = useTheme();
  return (
    <>
      <p className={`${className} label ${theme}`}>{label}</p>
      <textarea
        className="control"
        rows={rows}
        cols={cols}
        onChange={onChange}
      />
    </>
  );
};
